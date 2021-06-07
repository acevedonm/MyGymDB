import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExampleDto } from './dtos';
import { EditExampleDto } from './dtos/edit-example.dto';
import { ExampleEntity } from './entities/example.entity';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(ExampleEntity)
    private readonly _postRepository: Repository<ExampleEntity>,
  ) {}

  async findAll(): Promise<ExampleEntity[]> {
    return await this._postRepository.find();
  }
  findById(id: number) {
    return 'ok get by id';
  }
  async create(dto: CreateExampleDto) {
    return await this._postRepository.save(dto);
  }
  update(id: number, dto: EditExampleDto) {
    return 'ok update example';
  }
  delete(id: number) {
    return 'ok delete example';
  }
}
