import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

//Los Dtos funcionan como un contrato entre el cliente y la Api. Aca se definen las validaciones de los tipos de datos

export class ExerciseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  defaultReps: number;
}
