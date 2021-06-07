import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';

//Los Dtos funcionan como un contrato entre el cliente y la Api. Aca se definen las validaciones de los tipos de datos

export class CreateMuscleDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
