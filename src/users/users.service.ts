import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserRoles } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { LinksService } from 'src/links/links.service';
import { Link } from 'src/links/entities/link.entity';
import * as fs from 'fs';
import { join } from 'path';
@Injectable()
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIxNWE1YzVjNy05YjY3LTQ4MmYtOWY5Ni1mMDk0ZmJjYWU0Y2IiLCJpYXQiOjE3MjE0NzAzOTAsImV4cCI6MTcyNDA2MjM5MH0.AF5vfmS2sscb4ut5w5jU5eluLYtHKN5eFWRptn8XlVE"
export class UsersService {
  constructor(
    @InjectRepository(User) public userRepository: Repository<User>,
    @Inject(forwardRef(() => AuthService)) private authServ: AuthService,
    private LinksServ: LinksService
  ) { }
  //Регистрация пользователя
  async reg_function(createUserDto: CreateUserDto): Promise<{ access_token: string }> {
    const OldPassword = createUserDto.Password
    createUserDto.Password = await bcrypt.hash(createUserDto.Password, 10);
    const NewUsLink: Link = new Link();
    const User = await this.userRepository.save(createUserDto)
    NewUsLink.UserOfLink = User;
    this.LinksServ.AddNewLinkFromRegistration(NewUsLink);
    return await this.authServ.getAccessToken({ Email: createUserDto.Email, Password: OldPassword });
  }
  async getProfile(userID: string) {
    return this.userRepository.findOne({where: { Uuid: userID }});
  }
  async findOne(Email: string) {
    return this.userRepository.findOneBy({ Email: Email });
  }
  async DeleteMedia(path: string){
    fs.unlink(path, (err) => {
      if (err) {
        console.error(err);
        return err;
      }
    })
  }
  async MatchRoles(role: UserRoles[],userId: string){
    let result = false;
    const userRole = (await this.getProfile(userId)).Role
    role.forEach(async element => {
      if(userRole == element){
        result = true;
      }
    });
    return result;
  }
  async UpdateMedia({ MediaType, filePath, userId }: { MediaType: 'avatar' | 'banner', filePath: string, userId: string }) {
    const User = await this.userRepository.findOneBy({ Uuid: userId });
    this.DeleteMedia(join(process.cwd(),`/uploadedFiles/${MediaType == 'avatar' ? `avatars/` : 'banners'}/${userId}/${MediaType == 'avatar' ? User.UserMedia.ProfileImage : User.UserMedia.BannerImage}`))
    switch (MediaType) {
      case 'avatar':
        this.userRepository.update({ Uuid: userId }, { UserMedia: { ProfileImage: filePath, BannerImage: User.UserMedia.BannerImage, } });
        break;
      case 'banner':
        this.userRepository.update({ Uuid: userId }, { UserMedia: { BannerImage: filePath, ProfileImage: User.UserMedia.ProfileImage } });
        break;
    }
  }
}
