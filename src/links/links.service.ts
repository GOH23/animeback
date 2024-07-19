import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './entities/link.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LinksService {
  constructor(@InjectRepository(Link) private linkRepository: Repository<Link>,) { }
  //Добавление в тб ссылок при создании нового пользователя
  async AddNewLinkFromRegistration(lnkComponent: Link) {
    await this.linkRepository.save(lnkComponent)
  }

  findAll() {
    return `This action returns all links`;
  }

  findOne(id: number) {
    return `This action returns a #${id} link`;
  }

  update(id: number, updateLinkDto: UpdateLinkDto) {
    return `This action updates a #${id} link`;
  }

  remove(id: number) {
    return `This action removes a #${id} link`;
  }
}
