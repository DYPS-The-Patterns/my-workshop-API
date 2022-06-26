import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper, MappingProfile } from '@automapper/core';
import { Driver } from '../../../domain/entities/driver.model';
import { DriverDto } from '../dto/driver.dto';
import { DriverEntity } from '../../../infrastructure/persistence/entities/driver.entity';
import { CreateDriverDto } from '../dto/create-driver.dto';
import { UpdateDriverDto } from '../dto/update-driver.dto';

export class DriverProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, Driver, DriverDto);
      createMap(mapper, Driver, DriverEntity);
      createMap(mapper, DriverEntity, Driver);
      createMap(mapper, CreateDriverDto, Driver);
      createMap(mapper, UpdateDriverDto, Driver);
    };
  }
}
