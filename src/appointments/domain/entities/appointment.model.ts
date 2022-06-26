import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class Appointment {
  @ApiProperty()
  @AutoMap()
  id: number;
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  driverId: number;
  @ApiProperty()
  @AutoMap()
  ownerId: number;
  @ApiProperty()
  @AutoMap()
  date: string;
}
