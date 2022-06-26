import { ApiProperty } from "@nestjs/swagger";
import { AutoMap } from "@automapper/classes";

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
}
