import { WorkshopRepository } from '../../../domain/repositories/workshop.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkshopEntity } from '../entities/workshop.entity';
import { Repository } from 'typeorm';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Workshop } from '../../../domain/entities/workshop.model';

export class WorkshopsEntityRepository implements WorkshopRepository {
  constructor(
    @InjectRepository(WorkshopEntity)
    private workshopsRepository: Repository<WorkshopEntity>,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async create(workshop: Workshop): Promise<Workshop> {
    let workshopEntity = this.mapper.map(workshop, Workshop, WorkshopEntity);
    workshopEntity = this.workshopsRepository.create(workshopEntity);
    await this.workshopsRepository.save(workshopEntity);
    return this.mapper.map(workshopEntity, WorkshopEntity, Workshop);
  }

  async delete(id: number): Promise<{ delete: boolean }> {
    await this.workshopsRepository.delete({ id });
    return { delete: false };
  }

  async findAll(): Promise<Workshop[]> {
    return await this.workshopsRepository.find();
  }

  async findById(id: number) {
    return await this.workshopsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, workshop: Workshop): Promise<Workshop> {
    let workshopEntity = this.mapper.map(workshop, Workshop, WorkshopEntity);
    await this.workshopsRepository.update({ id }, workshopEntity);
    workshopEntity = await this.workshopsRepository.findOne({ id });
    return this.mapper.map(workshopEntity, WorkshopEntity, Workshop);
  }
}
