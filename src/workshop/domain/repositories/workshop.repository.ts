import { Workshop } from '../entities/workshop.model';

export const WORKSHOPS_REPOSITORY = 'WorkshopsRepository';

export interface WorkshopRepository {
  findAll(): Promise<Workshop[]>;
  create(workshop: Workshop): Promise<Workshop>;
  findById(id: number): Promise<Workshop>;
  update(id: number, workshop: Workshop): Promise<Workshop>;
  delete(id: number): Promise<{ delete: boolean }>;
}