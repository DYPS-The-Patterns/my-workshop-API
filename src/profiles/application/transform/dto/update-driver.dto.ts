import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDriverDto {
  @AutoMap()
  @ApiProperty()
  name: string;
  @AutoMap()
  @ApiProperty()
  address: string;
  @AutoMap()
  @ApiProperty()
  cellphone: number;
  @ApiProperty()
  @AutoMap()
  userId: number;
}
