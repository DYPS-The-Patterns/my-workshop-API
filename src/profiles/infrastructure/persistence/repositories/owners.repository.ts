import { OwnersRepository } from '../../../domain/repositories/owners.repository';
import { Owner } from '../../../domain/entities/owner.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { OwnerEntity } from '../entities/owner.entity';

export class OwnersEntityRepository implements OwnersRepository {
  constructor(
    @InjectRepository(OwnerEntity)
    private ownersRepository: Repository<OwnerEntity>,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async create(owner: Owner): Promise<Owner> {
    let ownerEntity = this.mapper.map(owner, Owner, OwnerEntity);
    ownerEntity = this.ownersRepository.create(ownerEntity);
    await this.ownersRepository.save(ownerEntity);
    return this.mapper.map(ownerEntity, OwnerEntity, Owner);
  }

  async delete(id: number): Promise<{ delete: boolean }> {
    await this.ownersRepository.delete({ id });
    return { delete: false };
  }

  async findAll(): Promise<Owner[]> {
    return await this.ownersRepository.find();
  }

  async findById(id: number): Promise<Owner> {
    return await this.ownersRepository.findOne({ where: { id: id } });
  }

  async update(id: number, owner: Owner): Promise<Owner> {
    let ownerEntity = this.mapper.map(owner, Owner, OwnerEntity);
    await this.ownersRepository.update({ id }, ownerEntity);
    ownerEntity = await this.ownersRepository.findOne({ id });
    return this.mapper.map(ownerEntity, OwnerEntity, Owner);
  }
}
