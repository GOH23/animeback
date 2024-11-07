import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import {compare} from 'bcrypt'
@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(()=>UsersService)) private usersService: UsersService,private jwtService: JwtService){ }
    async getAccessToken({Email,Password}: {Email: string,Password: string}) : Promise<{access_token: string}>{
        const findedUser = await this.usersService.findOne(Email);
        const MatchedPaswword = await compare(Password,findedUser.Password);
        if(!MatchedPaswword){
            throw new UnauthorizedException()
        }
        const payload = {userID: findedUser.Uuid}
        return {access_token: await this.jwtService.signAsync(payload)}
    }
    async getAuthProfile(userID: string){
        const profile= await this.usersService.getProfile(userID)
        return profile;
    }
}
