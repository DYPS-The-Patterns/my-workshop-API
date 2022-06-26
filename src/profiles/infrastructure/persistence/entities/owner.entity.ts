import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../../../security/infrastructure/persistence/entities/user.entity';
import { User } from '../../../../security/domain/entities/user.model';

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
  @Column()
  @AutoMap()
  userId: number;
  @AutoMap()
  @OneToOne(() => UserEntity, (user) => user.owner, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
