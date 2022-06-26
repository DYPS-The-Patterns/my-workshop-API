import { AutoMap } from '@automapper/classes';

export class WorkshopDto {
  @AutoMap()
  id: number;
  @AutoMap()
  name: string;
  @AutoMap()
  ownerId: number;
}
