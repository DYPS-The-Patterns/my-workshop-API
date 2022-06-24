import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper, MappingProfile } from '@automapper/core';
import { Workshop } from '../../../domain/entities/workshop.model';
import { WorkshopDto } from '../dto/workshop.dto';
import { WorkshopEntity } from '../../../infraestructure/persistence/entities/workshop.entity';
import { CreateWorkshopDto } from '../dto/create-workshop.dto';
import { UpdateWorkshopDto } from '../dto/update-workshop.dto';

export class workshopProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  get profile(): MappingProfile {
    createMap(mapper, Workshop, WorkshopDto);
    createMap(mapper, Workshop, WorkshopEntity);
    createMap(mapper, WorkshopEntity, Workshop);
    createMap(mapper, CreateWorkshopDto, Workshop);
    createMap(mapper, UpdateWorkshopDto, Workshop);
  }
}