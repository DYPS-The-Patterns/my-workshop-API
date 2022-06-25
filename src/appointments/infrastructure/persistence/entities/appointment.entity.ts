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
  id_driver: number;

  @AutoMap()
  @Column()
  id_owner: number;

  @AutoMap()
  @Column()
  date: string;
}
