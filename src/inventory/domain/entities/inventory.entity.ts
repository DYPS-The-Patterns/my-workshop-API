import { Entity , Column , PrimaryGeneratedColumn} from "typeorm";
import internal from "stream";

@Entity('inventory')
export class StorageID {
  ID: string;
}
export class Component {
  ID: string;
  name: string;
  info: string;
  quantity: number;
}
export class InventoryEntity {
  @PrimaryGeneratedColumn()
  place: Location;

  @Column()
  inv_components: Component;

  @Column()
  id_code: StorageID;
}
