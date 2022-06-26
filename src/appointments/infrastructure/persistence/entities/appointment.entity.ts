import { AutoMap } from '@automapper/classes';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
export class AppointmentEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column()
  name: string;

  @AutoMap()
  @Column()
  driverId: number;

  @AutoMap()
  @Column()
  ownerId: number;

  @AutoMap()
  @Column()
  date: string;
}
