import { Driver } from '../entities/driver.model';

export const DRIVERS_REPOSITORY = 'DriversRepository';

export interface DriversRepository {
  findAll(): Promise<Driver[]>
  create(driver: Driver): Promise<Driver>;
  findById(id: number): Promise<Driver>;
  update(id: number, driver: Driver): Promise<Driver>;
  delete(id: number): Promise<{ delete: boolean }>;
}
