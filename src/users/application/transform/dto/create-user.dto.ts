import { AutoMap } from '@automapper/classes';
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @AutoMap()
  @ApiProperty()
  name: string;
  @ApiProperty()
  @AutoMap()
  email: string;
  @ApiProperty()
  @AutoMap()
  password: string;
}
