import { Injectable } from '@nestjs/common';
import { CreateTagsDto } from './dto/create-tags.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tags } from './entities/tags.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
    constructor(@InjectRepository(Tags) private TagsRepository: Repository<Tags>){}
    async AddTags(TagsAdd: CreateTagsDto){
        TagsAdd.NameTags.forEach(element => {
            var NewTag: Tags = new Tags();
            NewTag.Tags = element;
            this.TagsRepository.save(NewTag);
        });
    }
}
