import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tags } from './entities/tags.entity';
import { UsersModule } from 'src/users/users.module';
import { AnimesModule } from 'src/animes/animes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tags]),UsersModule],
  exports: [TagsService],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
