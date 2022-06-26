import { DriversRepository } from '../../../domain/repositories/drivers.repository';
import { Driver } from '../../../domain/entities/driver.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { DriverEntity } from '../entities/driver.entity';

export class DriversEntityRepository implements DriversRepository {
  constructor(
    @InjectRepository(DriverEntity)
    private driversRepository: Repository<DriverEntity>,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async create(driver: Driver): Promise<Driver> {
    let driverEntity = this.mapper.map(driver, Driver, DriverEntity);
    driverEntity = this.driversRepository.create(driverEntity);
    await this.driversRepository.save(driverEntity);
    return this.mapper.map(driverEntity, DriverEntity, Driver);
  }

  async delete(id: number): Promise<{ delete: boolean }> {
    await this.driversRepository.delete({ id });
    return { delete: false };
  }

  async findAll(): Promise<Driver[]> {
    return await this.driversRepository.find();
  }

  async findById(id: number): Promise<Driver> {
    return await this.driversRepository.findOne({ where: { id: id } });
  }

  async update(id: number, driver: Driver): Promise<Driver> {
    let driverEntity = this.mapper.map(driver, Driver, DriverEntity);
    await this.driversRepository.update({ id }, driverEntity);
    driverEntity = await this.driversRepository.findOne({ id });
    return this.mapper.map(driverEntity, DriverEntity, Driver);
  }
}
