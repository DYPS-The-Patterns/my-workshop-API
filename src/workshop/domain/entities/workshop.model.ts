import { AutoMap } from '@automapper/classes';

export class Workshop {
  @AutoMap()
  id: number;
  @AutoMap()
  name: string;
  @AutoMap()
  owner_id: string;
}
