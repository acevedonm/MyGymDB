import { Module } from '@nestjs/common';
import { MuscleService } from './muscle.service';
import { MuscleController } from './muscle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuscleEntity } from './entities/muscle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MuscleEntity])],
  controllers: [MuscleController],
  providers: [MuscleService],
})
export class MuscleModule {}
