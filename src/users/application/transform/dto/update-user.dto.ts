import { AutoMap } from '@automapper/classes';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
  @AutoMap()
  @ApiProperty()
  id: number;
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  email: string;
  @ApiProperty()
  @AutoMap()
  password: string;
}
