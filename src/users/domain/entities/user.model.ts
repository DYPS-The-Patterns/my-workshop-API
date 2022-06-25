import { AutoMap } from '@automapper/classes';
import { ApiProperty } from "@nestjs/swagger";

export class User {
  @ApiProperty()
  @AutoMap()
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
