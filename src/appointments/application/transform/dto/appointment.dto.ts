import { AutoMap } from '@automapper/classes';

export class AppointmentDto {
  @AutoMap()
  id: number;
  @AutoMap()
  name: string;
  @AutoMap()
  date: string;
}
