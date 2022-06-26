import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper, MappingProfile } from '@automapper/core';
import { Owner } from '../../../domain/entities/owner.model';
import { OwnerDto } from '../dto/owner.dto';
import { OwnerEntity } from '../../../infrastructure/persistence/entities/owner.entity';
import { CreateOwnerDto } from '../dto/create-owner.dto';
import { UpdateOwnerDto } from '../dto/update-owner.dto';

export class OwnerProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, Owner, OwnerDto);
      createMap(mapper, Owner, OwnerEntity);
      createMap(mapper, OwnerEntity, Owner);
      createMap(mapper, CreateOwnerDto, Owner);
      createMap(mapper, UpdateOwnerDto, Owner);
    };
  }
}
