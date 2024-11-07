import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailconfirmationService } from './emailconfirmation.service';
import { CreateEmailconfirmationDto } from './dto/create-emailconfirmation.dto';
import { UpdateEmailconfirmationDto } from './dto/update-emailconfirmation.dto';

@Controller('authentication')
export class EmailconfirmationController {
  constructor(private readonly emailconfirmationService: EmailconfirmationService) {}

  @Post()
  create(@Body() createEmailconfirmationDto: CreateEmailconfirmationDto) {

  }
}
