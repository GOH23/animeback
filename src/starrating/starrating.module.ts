import { Module } from '@nestjs/common';
import { StarratingService } from './starrating.service';
import { StarratingController } from './starrating.controller';

@Module({
  controllers: [StarratingController],
  providers: [StarratingService],
})
export class StarratingModule {}
