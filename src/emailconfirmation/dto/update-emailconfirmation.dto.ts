import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailconfirmationDto } from './create-emailconfirmation.dto';

export class UpdateEmailconfirmationDto extends PartialType(CreateEmailconfirmationDto) {}
