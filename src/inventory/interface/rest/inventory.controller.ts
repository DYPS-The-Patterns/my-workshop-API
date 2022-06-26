import { Controller, Get, HttpStatus } from '@nestjs/common';
import { InventoryService } from '../../domain/services/inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Get()
  async getAllInventories() {
    const inventories = await this.inventoryService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Inventories fetched successfully',
      inventories,
    };
  }
}
