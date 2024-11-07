import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { TagsService } from './tags.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { UserRoles } from 'src/users/entities/user.entity';
import { CreateOneTagDto, CreateTagsDto } from './dto/create-tags.dto';

@UseGuards(AuthGuard)
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}
  @UseGuards(RolesGuard)
  @Roles([UserRoles.User])
  @Post()
  async CreateTag(@Body() TagDto: CreateOneTagDto){
    return this.tagsService.addNewTag(TagDto)
  }
  @Get()
  async getAllTags(){
    return this.tagsService.getAll();
  }
}
