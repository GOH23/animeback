import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StarratingService } from './starrating.service';
import { CreateStarratingDto } from './dto/create-starrating.dto';
import { UpdateStarratingDto } from './dto/update-starrating.dto';

@Controller('starrating')
export class StarratingController {
  constructor(private readonly starratingService: StarratingService) {}

  @Post()
  create(@Body() createStarratingDto: CreateStarratingDto) {
    return this.starratingService.create(createStarratingDto);
  }

  @Get()
  findAll() {
    return this.starratingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.starratingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStarratingDto: UpdateStarratingDto) {
    return this.starratingService.update(+id, updateStarratingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.starratingService.remove(+id);
  }
}
