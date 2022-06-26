import {
  Component,
  StorageID,
} from '../../../domain/entities/inventory.entity';

export interface InventoryDto {
  place: Location;
  inv_components: Component;
  id_code: StorageID;
}
