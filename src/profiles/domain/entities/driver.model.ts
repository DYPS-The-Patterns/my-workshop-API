import { ApiProperty } from "@nestjs/swagger";
import { AutoMap } from "@automapper/classes";

export class Driver {
  @ApiProperty()
  @AutoMap()
  id: number;
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  address: string;
  @ApiProperty()
  @AutoMap()
  cellphone: number;
}
