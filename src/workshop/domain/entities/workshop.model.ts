import { AutoMap } from '@automapper/classes';
import { ApiProperty } from "@nestjs/swagger";

export class Workshop {
  @ApiProperty()
  @AutoMap()
  id: number;
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  ownerId: string;
}
