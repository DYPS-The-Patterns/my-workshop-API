import { Module } from '@nestjs/common';
import { DriversService } from './domain/services/drivers.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DriverEntity } from "./infrastructure/persistence/entities/driver.entity";
import { DriversEntityRepository } from "./infrastructure/persistence/repositories/drivers.repository";
import { DRIVERS_REPOSITORY } from "./domain/repositories/drivers.repository";
import { DriverProfile } from "./application/transform/profiles/driver.profile";
import { DriversController } from "./interface/rest/drivers.controller";

@Module({
  imports: [TypeOrmModule.forFeature([DriverEntity])],
  providers: [
    { useClass: DriversEntityRepository, provide: DRIVERS_REPOSITORY },
    DriverProfile,
    DriversService
  ],
  controllers: [DriversController],
})
export class DriversModule {}
