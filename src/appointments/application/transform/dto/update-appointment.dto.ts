import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAppointmentDto {
  @AutoMap()
  @ApiProperty()
  name: string;
  @AutoMap()
  @ApiProperty()
  driverId: number;
  @AutoMap()
  @ApiProperty()
  ownerId: number;
  @AutoMap()
  @ApiProperty()
  date: string;
}
