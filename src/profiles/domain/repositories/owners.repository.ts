import { Owner } from '../entities/owner.model';

export const OWNERS_REPOSITORY = 'OwnersRepository';

export interface OwnersRepository {
  findAll(): Promise<Owner[]>;
  create(owner: Owner): Promise<Owner>;
  findById(id: number): Promise<Owner>;
  update(id: number, owner: Owner): Promise<Owner>;
  delete(id: number): Promise<{ delete: boolean }>;
}
