import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateMuscleDto } from './create-muscle.dto';

export class EditMuscleDto extends PartialType(
  OmitType(CreateMuscleDto, ['name'] as const),
) {}
