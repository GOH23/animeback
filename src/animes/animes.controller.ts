import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Inject, UseInterceptors } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { AnimeDto } from './dto/create-anime.dto';

import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { UserRoles } from 'src/users/entities/user.entity';

@Controller('animes')
export class AnimesController {
  constructor(private readonly animesService: AnimesService) {}

  @Post()
  @Roles([UserRoles.User])
  @UseGuards(AuthGuard,RolesGuard)
  async add_anime(@Body() createAnimeDto: AnimeDto) {
    return await this.animesService.create(createAnimeDto);
  }
  @Post(":id")
  @Roles([UserRoles.User])
  @UseGuards(AuthGuard,RolesGuard)
  @UseInterceptors()
  async UploadPreviewImage() {
  }
  @Get(":id")
  async GetOneAnime(@Param("id") id: string) {
    return this.animesService.findOne(id);
  }
}
