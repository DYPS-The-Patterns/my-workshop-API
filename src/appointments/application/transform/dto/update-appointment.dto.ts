import { AutoMap } from '@automapper/classes';

export class UpdateAppointmentDto {
  @AutoMap()
  id: number;
  @AutoMap()
  name: string;
  @AutoMap()
  id_driver: number;
  @AutoMap()
  id_owner: number;
  @AutoMap()
  date: string;
}
