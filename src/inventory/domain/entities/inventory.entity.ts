import { Entity , Column , PrimaryGeneratedColumn} from "typeorm";
import internal from "stream";

@Entity('inventory')
export class InventoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  description: string;

  @Column()
  workshopId: number;
}
