import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateMuscleDto, EditMuscleDto } from './dto';
import { MuscleEntity } from './entities/muscle.entity';
import { MuscleService } from './muscle.service';

@Controller('muscle')
export class MuscleController {
  //El controller es quien recibe la Request, y se la envia al servicio correspondiente.

  constructor(private readonly _muscleService: MuscleService) {}
  @Get()
  get(): Promise<CreateMuscleDto[]> {
    return this._muscleService.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this._muscleService.findById(id);
  }

  @Post()
  post(@Body() body: CreateMuscleDto) {
    return this._muscleService.create(body);
  }

  @Put(':id')
  put(@Param('id', ParseIntPipe) id: number, @Body() body: EditMuscleDto) {
    return this._muscleService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this._muscleService.delete(id);
  }
}
