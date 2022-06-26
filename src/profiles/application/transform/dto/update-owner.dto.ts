import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';

export class UpdateOwnerDto {
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  cellphone: number;
  @ApiProperty()
  @AutoMap()
  userId: number;
}
