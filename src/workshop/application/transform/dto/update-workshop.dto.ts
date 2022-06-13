import { AutoMap } from '@automapper/classes';

export class UpdateWorkshopDto {
  @AutoMap()
  id: number;
  @AutoMap()
  name: string;
  @AutoMap()
  owner_id: number;
}