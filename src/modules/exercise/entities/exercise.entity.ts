import { text } from 'express';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('excercise')
export class MuscleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'number', nullable: false })
  defaultReps: number;
}
