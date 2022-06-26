import { Inject, Injectable } from '@nestjs/common';
import {
  DRIVERS_REPOSITORY,
  DriversRepository,
} from '../repositories/drivers.repository';
import { Driver } from '../entities/driver.model';

@Injectable()
export class DriversService {
  constructor(
    @Inject(DRIVERS_REPOSITORY)
    private readonly driversRepository: DriversRepository,
  ) {}

  async getAll() {
    return await this.driversRepository.findAll();
  }

  async create(driver: Driver) {
    return await this.driversRepository.create(driver);
  }

  async getById(id: number) {
    return this.driversRepository.findById(id);
  }

  async update(id: number, driver: Driver) {
    return await this.driversRepository.update(id, driver);
  }

  async delete(id: number) {
    return await this.driversRepository.delete(id);
  }
}
