import { AutoMap } from '@automapper/classes';
import { UserEntity } from '../../../../security/infrastructure/persistence/entities/user.entity';

export class OwnerDto {
  @AutoMap()
  id: number;
  @AutoMap()
  name: string;
  @AutoMap()
  cellphone: number;
  @AutoMap()
  user: UserEntity;
}
