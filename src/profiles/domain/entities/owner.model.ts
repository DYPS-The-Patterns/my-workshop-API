import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';
import { User } from '../../../security/domain/entities/user.model';

export class Owner {
  @ApiProperty()
  @AutoMap()
  id: number;
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  cellphone: number;
  @ApiProperty()
  @AutoMap()
  user: User;
  @ApiProperty()
  @AutoMap()
  userId: number;
}
