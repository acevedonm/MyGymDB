import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('muscle')
export class MuscleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;
}
