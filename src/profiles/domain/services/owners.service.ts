import { Inject, Injectable } from '@nestjs/common';
import {
  OWNERS_REPOSITORY,
  OwnersRepository,
} from '../repositories/owners.repository';
import { Owner } from '../entities/owner.model';

@Injectable()
export class OwnersService {
  constructor(
    @Inject(OWNERS_REPOSITORY)
    private readonly ownersRepository: OwnersRepository,
  ) {}

  async getAll() {
    return await this.ownersRepository.findAll();
  }

  async create(owner: Owner) {
    return await this.ownersRepository.create(owner);
  }

  async getById(id: number) {
    return this.ownersRepository.findById(id);
  }

  async update(id: number, owner: Owner) {
    return await this.ownersRepository.update(id, owner);
  }

  async delete(id: number) {
    return await this.ownersRepository.delete(id);
  }
}
