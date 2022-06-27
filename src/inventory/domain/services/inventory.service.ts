import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryEntity } from '../entities/inventory.entity';
import { Repository } from 'typeorm';
import { InventoryDto } from '../../application/transform/dto/inventory.dto';

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
  async findByID(id: number): Promise<InventoryEntity> {
    return await this.inventoryRepository.findOne({
      where: { id: id },
    });
  }
  async update(id: number, data: Partial<InventoryDto>) {
    await this.inventoryRepository.update({ id }, data);
    return await this.inventoryRepository.findOne({ id });
  }
  async delete(id: number) {
    await this.inventoryRepository.delete({ id });
    return { deleted: true };
  }
}
