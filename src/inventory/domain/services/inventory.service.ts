import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryEntity } from '../entities/inventory.entity';
import { Repository } from 'typeorm';
import { InventoryDto } from '../../application/transform/dto/inventory.dto';
import { StorageID } from '../entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(InventoryEntity)
    private inventoryRepository: Repository<InventoryEntity>,
  ) {}
  async showAll() {
    return await this.inventoryRepository.find();
  }
  async create(data: InventoryDto) {
    const inventory = this.inventoryRepository.create(data);
    await this.inventoryRepository.save(data);
    return inventory;
  }
  async findByID(id_code: StorageID): Promise<InventoryDto> {
    return await this.inventoryRepository.findOne({
      where: { id_code: id_code },
    });
  }
  async update(id_code: StorageID, data: Partial<InventoryDto>) {
    await this.inventoryRepository.update({ id_code }, data);
    return await this.inventoryRepository.findOne({ id_code });
  }
  async delete(id_code: StorageID) {
    await this.inventoryRepository.delete({ id_code });
    return { deleted: true };
  }
}
