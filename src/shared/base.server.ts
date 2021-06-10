import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

export class BaseServer<T> {
  constructor(
    private readonly _repository: Repository<T>,
    private readonly _dto: any,
  ) {}

  async findAll(): Promise<T[]> {
    return await this._repository.find();
  }
  async findById(id: number) {
    return await this._repository.findOne(id);
  }
  async create(dto: any) {
    return await this._repository.save(dto);
  }
  async update(id: number, dto: T) {
    return await this._repository.update(id, dto);
  }
  async delete(id: number) {
    return await this._repository.delete(id);
  }
}
