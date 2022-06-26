import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';

export class CreateDriverDto {
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  address: string;
  @ApiProperty()
  @AutoMap()
  cellphone: number;
  @ApiProperty()
  @AutoMap()
  userId: number;
}
