import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { StarratingService } from './starrating.service';
import { CreateStarratingDto } from './dto/create-starrating.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('starrating')
export class StarratingController {
  constructor(private readonly starratingService: StarratingService) {}
  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() ReqBody: CreateStarratingDto,@Req() req: any){
    return await this.starratingService.add_rating(ReqBody,req.userID.userID)
  }
}
