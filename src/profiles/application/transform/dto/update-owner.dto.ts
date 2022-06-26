import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';

export class UpdateOwnerDto {
  @AutoMap()
  @ApiProperty()
  id: number;
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
