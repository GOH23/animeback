import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, Req, ParseFilePipe, MaxFileSizeValidator, ParseFilePipeBuilder, HttpStatus, FileTypeValidator } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'
import { diskStorage, MulterError } from 'multer';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  //Reg Controller
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }
  // //Auth Controller
  @Post()
  registration(@Body() createUserDto: CreateUserDto) {
    return this.usersService.reg_function(createUserDto);
  }
  @Post("avatar")
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor("image", {
    fileFilter: (req, file, cb) => {
      if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
        cb(null, true);
      else {
        cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
      }
    },
    storage: diskStorage({
      destination(req: any, file, callback) {
        const UploadPath = `./uploadedFiles/avatars/${req.userID.userID}`
        if (!existsSync(UploadPath)) {
          mkdirSync(UploadPath);
        }
        callback(null, UploadPath)
      },
      filename(req, file, callback) {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        return callback(null, `${randomName}${extname(file.originalname)}`)
      },
    })
  }))
  update_media_avatar(@Req() Reqs: any,
    @UploadedFile() file: Express.Multer.File) {
    this.usersService.UpdateMedia({ MediaType: 'avatar', filePath: file.filename, userId: Reqs.userID.userID })
  }
  @Post("banner")
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor("image", {
    fileFilter: (req, file, cb) => {
      if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
        cb(null, true);
      else {
        cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
      }
    },
    storage: diskStorage({
      destination(req: any, file, callback) {
        const UploadPath = `./uploadedFiles/banners/${req.userID.userID}`
        if (!existsSync(UploadPath)) {
          mkdirSync(UploadPath);
        }
        callback(null, UploadPath)
      },
      filename(req, file, callback) {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        return callback(null, `${randomName}${extname(file.originalname)}`)
      },
    })
  }))
  update_media_banner(@Req() Reqs: any,
    @UploadedFile() file: Express.Multer.File) {

    this.usersService.UpdateMedia({ MediaType: 'banner', filePath: file.filename, userId: Reqs.userID.userID })
  }
  /*@Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }*/
}


