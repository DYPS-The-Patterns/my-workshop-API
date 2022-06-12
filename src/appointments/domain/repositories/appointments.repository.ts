import { Appointment } from '../entities/appointment.model';

export const APPOINTMENTS_REPOSITORY = 'AppointmentsRepository';

export interface AppointmentsRepository {
  findAll(): Promise<Appointment[]>;
  create(appointment: Appointment): Promise<Appointment>;
  findById(id: number): Promise<Appointment>;
  update(id: number, appointment: Appointment): Promise<Appointment>;
  delete(id: number): Promise<{ delete: boolean }>;
}
