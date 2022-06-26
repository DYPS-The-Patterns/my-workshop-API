import { AutoMap } from '@automapper/classes';
import { ApiProperty } from "@nestjs/swagger";

export class CreateWorkshopDto {
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  ownerId: number;
}