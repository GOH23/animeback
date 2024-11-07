import { Injectable } from '@nestjs/common';
import { CreateStarratingDto } from './dto/create-starrating.dto';
import { UpdateStarratingDto } from './dto/update-starrating.dto';
import { StarRating } from './entities/starrating.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { AnimesService } from 'src/animes/animes.service';

@Injectable()
export class StarratingService {
  constructor(
    @InjectRepository(StarRating) private starRateRep: Repository<StarRating>,
    private usersService: UsersService,
    private animeService: AnimesService
  ){}
  async add_rating (createDto: CreateStarratingDto,userID: string) {
      let FindedStarRating : StarRating | null = await this.starRateRep.findOneBy({RatedAnime: {id: createDto.AnimeId},RatedUser: {Uuid: userID}});
      if(FindedStarRating){
        FindedStarRating.Rating = createDto.StarRate
        return await this.starRateRep.save(FindedStarRating)
      }else{
        FindedStarRating = new StarRating();
        FindedStarRating.Rating = createDto.StarRate;
        FindedStarRating.RatedAnime = await this.animeService.findOne(createDto.AnimeId);
        FindedStarRating.RatedUser = await this.usersService.getProfile(userID);
        return await this.starRateRep.save(FindedStarRating)
      }

      
  }
}
