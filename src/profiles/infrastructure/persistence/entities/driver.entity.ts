import { AutoMap } from '@automapper/classes';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('drivers')
export class DriverEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;
  @AutoMap()
  @Column()
  name: string;
  @AutoMap()
  @Column()
  address: string;
  @AutoMap()
  @Column()
  cellphone: number;
}
