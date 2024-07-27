import { Injectable } from '@nestjs/common';
import { CreateStarratingDto } from './dto/create-starrating.dto';
import { UpdateStarratingDto } from './dto/update-starrating.dto';

@Injectable()
export class StarratingService {
  create(createStarratingDto: CreateStarratingDto) {
    return 'This action adds a new starrating';
  }

  findAll() {
    return `This action returns all starrating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} starrating`;
  }

  update(id: number, updateStarratingDto: UpdateStarratingDto) {
    return `This action updates a #${id} starrating`;
  }

  remove(id: number) {
    return `This action removes a #${id} starrating`;
  }
}
