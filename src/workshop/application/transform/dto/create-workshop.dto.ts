import { AutoMap } from '@automapper/classes';

export class CreateWorkshopDto {
  @AutoMap()
  id: number;
  @AutoMap()
  name: string;
  @AutoMap()
  owner_id: number;
}