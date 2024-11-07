import { Module } from '@nestjs/common';
import { StarratingService } from './starrating.service';
import { StarratingController } from './starrating.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarRating } from './entities/starrating.entity';
import { UsersModule } from 'src/users/users.module';
import { AnimesModule } from 'src/animes/animes.module';

@Module({
  imports: [TypeOrmModule.forFeature([StarRating]),UsersModule,AnimesModule],
  controllers: [StarratingController],
  providers: [StarratingService],
})
export class StarratingModule {}
