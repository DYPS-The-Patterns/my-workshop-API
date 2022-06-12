import { AutoMap } from '@automapper/classes';

export class UpdateWorkshop {
  @AutoMap()
  id: number;
  @AutoMap()
  name: string;
  @AutoMap()
  owner_id: number;
}