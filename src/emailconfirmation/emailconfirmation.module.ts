import { Module } from '@nestjs/common';
import { EmailconfirmationService } from './emailconfirmation.service';
import { EmailconfirmationController } from './emailconfirmation.controller';

@Module({
  controllers: [EmailconfirmationController],
  providers: [EmailconfirmationService],
})
export class EmailconfirmationModule {}
