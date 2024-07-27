import { Controller, Get, Param, Res, StreamableFile, UseGuards } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { UserRoles } from 'src/users/entities/user.entity';

@Controller('medias')
export class FileController {
    @Get('avatar/:avatarPath')
    @UseGuards(AuthGuard)
    async getFile(@Param('avatarPath') avatarImg,@Res() res) {
        return res.sendFile(join(process.cwd(),"uploadedFiles","avatars",avatarImg));
    }
    @Get('banner/:avatarPath')
    @UseGuards(AuthGuard)
    async getFileBanner(@Param('avatarPath') BannerImg,@Res() res) {
        return res.sendFile(join(process.cwd(),"uploadedFiles","banners",BannerImg));
    }

    @Get('animes/:anime_main_image')
    @UseGuards(AuthGuard)
    async getAnimeImage(@Param('anime_main_image') AnimeImage){

    }
}
