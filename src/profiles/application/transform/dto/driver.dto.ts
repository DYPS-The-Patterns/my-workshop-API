import { AutoMap } from '@automapper/classes';
import { UserEntity } from '../../../../security/infrastructure/persistence/entities/user.entity';

export class DriverDto {
  @AutoMap()
  id: number;
  @AutoMap()
  name: string;
  @AutoMap()
  address: string;
  @AutoMap()
  cellphone: number;
  @AutoMap()
  user: UserEntity;
}
