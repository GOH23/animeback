import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { LinksService } from 'src/links/links.service';
import { Link } from 'src/links/entities/link.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @Inject(forwardRef(() => AuthService)) private authServ: AuthService,
    private LinksServ: LinksService
  ) { }
  //Регистрация пользователя
  async reg_function(createUserDto: CreateUserDto): Promise<{ access_token: string }> {
    createUserDto.Password = await bcrypt.hash(createUserDto.Password, 10);
    const NewUsLink: Link = new Link();
    const User = await this.userRepository.save(createUserDto)
    NewUsLink.UserOfLink = User;
    this.LinksServ.AddNewLinkFromRegistration(NewUsLink);
    return await this.authServ.getAccessToken({ Email: createUserDto.Email, Password: createUserDto.Password });
  }
  findOne(Email: string) {
    return this.userRepository.findOneBy({ Email: Email });
  }
}
