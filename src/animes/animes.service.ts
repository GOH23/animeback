import { Injectable } from '@nestjs/common';
import { AnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Anime } from './entities/anime.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimesService {
  constructor(@InjectRepository(Anime) private AnimeRepository : Repository<Anime>){}
  create(createAnimeDto: AnimeDto) {

    return this.AnimeRepository.save(createAnimeDto);
  }

  findAll() {
    return `This action returns all animes`;
  }

  async findOne(id: string) {
    var GetedAnime = await this.AnimeRepository.findOne({where: {id: id}});
    GetedAnime.ViewCount++
    return this.AnimeRepository.save(GetedAnime);
  }

  update(id: number, updateAnimeDto: UpdateAnimeDto) {
    return `This action updates a #${id} anime`;
  }

  remove(id: number) {
    return `This action removes a #${id} anime`;
  }
}
