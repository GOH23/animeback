import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthModule } from 'src/auth/auth.module';
import { LinksModule } from 'src/links/links.module';


@Module({
  imports: [forwardRef(()=>AuthModule),LinksModule,TypeOrmModule.forFeature([User,CreateUserDto])],
  exports: [TypeOrmModule,UsersService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
