import { Inject, Injectable } from '@nestjs/common';
import {
  WorkshopRepository,
  WORKSHOPS_REPOSITORY,
} from '../repositories/workshop.repository';
import { Workshop } from '../entities/workshop.model';

@Injectable()
export class WorkshopService {
  constructor(
    @Inject(WORKSHOPS_REPOSITORY)
    private readonly workshopsRepository: WorkshopRepository,
  ) {}

  async findAll() {
    return await this.workshopsRepository.findAll();
  }

  async create(workshop: Workshop) {
    return await this.workshopsRepository.create(workshop);
  }

  async getById(id: number) {
    return await this.workshopsRepository.findById(id);
  }

  async update(id: number, workshop: Workshop) {
    return await this.workshopsRepository.update(id, workshop);
  }

  async delete(id: number) {
    return await this.workshopsRepository.delete(id);
  }
}