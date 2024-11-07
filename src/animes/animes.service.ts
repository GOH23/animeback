import { Get, Injectable } from '@nestjs/common';
import { AnimeDto } from './dto/create-anime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Anime } from './entities/anime.entity';
import { Repository } from 'typeorm';
import { UpdateAnimesAddtTagDto } from './dto/update-anime-add-tag.dto';
import { TagsService } from 'src/tags/tags.service';

@Injectable()
export class AnimesService {
  constructor(@InjectRepository(Anime) private AnimeRepository: Repository<Anime>,private TagsService: TagsService) { }
  create(createAnimeDto: AnimeDto) {
    return this.AnimeRepository.save(createAnimeDto);
  }
  findAll() {
    return this.AnimeRepository
      .createQueryBuilder('anime')
      .leftJoinAndSelect('anime.StarRating', 'StarRating')

      .select([
        'anime.Id',
        'anime.Name',
        'anime.Description',
        'anime.ImageAnime',
        'anime.PreviewImages',
        'anime.ViewCount',
        'anime.CreatedAt',

      ])
      .groupBy('anime.Id')
      .addSelect('COALESCE(AVG(StarRating.Rating), 0)', 'AverageRating')
      .getRawMany();
  }
  async AddTag({AnimeID,TagName}: UpdateAnimesAddtTagDto){
    var GetedAnime = await this.AnimeRepository.findOne({where: { id: AnimeID },relations: {Tags: true}});
    GetedAnime.Tags = [...GetedAnime.Tags,await this.TagsService.getTagFromName(TagName)]
    return this.AnimeRepository.save(GetedAnime);
  }
  async findOne(id: string) {
    var GetedAnime = await this.AnimeRepository.findOne({where: { id: id },relations: {Tags: true} });
    GetedAnime.ViewCount++
    return this.AnimeRepository.save(GetedAnime);
  }
}
