import { Module } from '@nestjs/common';
import { InventoryService } from './domain/services/inventory.service';
import { InventoryController } from './interface/rest/inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryEntity } from './domain/entities/inventory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryEntity])],
  providers: [InventoryService],
  controllers: [InventoryController],
})
export class InventoryModule {}
