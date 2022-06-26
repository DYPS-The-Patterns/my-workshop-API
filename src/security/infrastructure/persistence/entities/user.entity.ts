import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { createHmac } from 'crypto';
import { AutoMap } from '@automapper/classes';
import { OwnerEntity } from '../../../../profiles/infrastructure/persistence/entities/owner.entity';
import { DriverEntity } from '../../../../profiles/infrastructure/persistence/entities/driver.entity';

@Entity('users')
export class UserEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column()
  name: string;

  @AutoMap()
  @Column()
  email: string;

  hashPassword() {
    this.password = createHmac('sha256', this.password).digest('hex');
  }

  @AutoMap()
  @Column()
  password: string;

  @OneToOne(() => OwnerEntity, (owner) => owner.user)
  owner: OwnerEntity;

  @OneToOne(() => DriverEntity, (driver) => driver.user)
  driver: DriverEntity;
}
