import { Injectable } from '@nestjs/common';
import { CreateOneTagDto, CreateTagsDto } from './dto/create-tags.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tags } from './entities/tags.entity';
import { Repository } from 'typeorm';

import { AnimesService } from 'src/animes/animes.service';
import { Anime } from 'src/animes/entities/anime.entity';

@Injectable()
export class TagsService {
    constructor(@InjectRepository(Tags) private TagsRepository: Repository<Tags>){}
    getTagFromName(TagName: string){
        return this.TagsRepository.findOne({where: {TagName: TagName}});
    }
    getAll(){
        return this.TagsRepository.find();
    }
    addNewTag(TagDto : CreateOneTagDto){

        return this.TagsRepository.save(TagDto);
    }
    // addNewTags(TagsDto: CreateTagsDto){
        
    // }
}
