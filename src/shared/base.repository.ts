import { FilterQuery, Model } from 'mongoose';

export class BaseRepository<T> {
  constructor(private readonly model: Model<T>) {}

  public async create(doc: T): Promise<T> {
    const createdEntity = new this.model(doc);
    const entity = await createdEntity.save();
    if (entity) {
      return entity.toObject() as T;
    }
    return null;
  }

  public async findById(id: string): Promise<T> {
    return (await this.model.findById(id).lean()) as T;
  }

  public async findAll(query?: FilterQuery<T>): Promise<T[]> {
    return await this.model.find(query).lean();
  }

  public async update(id: string, model: T): Promise<void> {
    await this.model.findByIdAndUpdate(id, model);
    return;
  }

  public async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id);
    return;
  }

  public async destroy(id: number): Promise<void> {
    await this.model.findByIdAndDelete(id);
    return;
  }
}
