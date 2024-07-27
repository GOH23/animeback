import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { TagsService } from './tags.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { UserRoles } from 'src/users/entities/user.entity';
import { CreateTagsDto } from './dto/create-tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}
  @Post()
  @UseGuards(AuthGuard,RolesGuard)
  @Roles([UserRoles.User])
  add_tags(@Body() JsonBody: CreateTagsDto){
    this.tagsService.AddTags(JsonBody);
  }
}
