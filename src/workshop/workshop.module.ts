import { WorkshopService } from './domain/services/workshop.service';
import { WorkshopsController } from './interface/rest/workshops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkshopEntity } from './infraestructure/persistence/entities/workshop.entity';
import { WorkshopsEntityRepository } from './infraestructure/persistence/repositories/workshops.repository';
import { WORKSHOPS_REPOSITORY } from './domain/repositories/workshop.repository';
import { Module } from '@nestjs/common';
import { workshopProfile } from './application/transform/profiles/workshop.profile';

@Module({
  imports: [TypeOrmModule.forFeature([WorkshopEntity])],
  providers: [
    { useClass: WorkshopsEntityRepository, provide: WORKSHOPS_REPOSITORY },
    workshopProfile,
    WorkshopService,
  ],
  controllers: [WorkshopsController],
})
export class WorkshopModule {}
