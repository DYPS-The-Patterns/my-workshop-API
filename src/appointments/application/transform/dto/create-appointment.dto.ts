import { AutoMap } from '@automapper/classes';

export class CreateAppointmentDto {
  @AutoMap()
  name: string;
  @AutoMap()
  id_driver: number;
  @AutoMap()
  id_owner: number;
  @AutoMap()
  date: string;
}
