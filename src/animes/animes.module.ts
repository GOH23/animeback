import { Module } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { AnimesController } from './animes.controller';
import { RolesGuard } from 'src/roles/roles.guard';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anime } from './entities/anime.entity';


@Module({
  imports: [UsersModule,TypeOrmModule.forFeature([Anime])],
  controllers: [AnimesController],
  providers: [AnimesService],
})
export class AnimesModule {}
