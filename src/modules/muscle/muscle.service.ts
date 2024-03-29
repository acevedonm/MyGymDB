import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateMuscleDto, EditMuscleDto } from './dto';

import { MuscleEntity } from './entities/muscle.entity';

@Injectable()
export class MuscleService {
  constructor(
    @InjectRepository(MuscleEntity)
    private readonly _postRepository: Repository<MuscleEntity>,
  ) {}

  async findAll(): Promise<MuscleEntity[]> {
    return await this._postRepository.find();
  }
  async findById(id: number) {
    return await this._postRepository.findOne(id);
  }
  async create(dto: CreateMuscleDto) {
    return await this._postRepository.save(dto);
  }
  async update(id: number, dto: EditMuscleDto) {
    let muscle = plainToClass(MuscleEntity, dto);
    return await this._postRepository.update(id, muscle);
  }
  async delete(id: number) {
    return await this._postRepository.delete(id);
  }
}
