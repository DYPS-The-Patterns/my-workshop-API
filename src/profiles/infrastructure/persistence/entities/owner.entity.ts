import { AutoMap } from '@automapper/classes';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('owners')
export class OwnerEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;
  @AutoMap()
  @Column()
  name: string;
  @AutoMap()
  @Column()
  cellphone: number;
}
