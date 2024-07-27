import { PartialType } from '@nestjs/mapped-types';
import { CreateStarratingDto } from './create-starrating.dto';

export class UpdateStarratingDto extends PartialType(CreateStarratingDto) {}
