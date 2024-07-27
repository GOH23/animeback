import { PartialType } from '@nestjs/mapped-types';
import { AnimeDto } from './create-anime.dto';

export class UpdateAnimeDto extends PartialType(AnimeDto) {}
