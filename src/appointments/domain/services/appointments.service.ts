import { Inject, Injectable } from '@nestjs/common';
import {
  APPOINTMENTS_REPOSITORY,
  AppointmentsRepository,
} from '../repositories/appointments.repository';
import { Appointment } from '../entities/appointment.model';

@Injectable()
export class AppointmentsService {
  constructor(
    @Inject(APPOINTMENTS_REPOSITORY)
    private readonly appointmentsRepository: AppointmentsRepository,
  ) {}

  async getAll() {
    return await this.appointmentsRepository.findAll();
  }

  async create(user: Appointment) {
    return await this.appointmentsRepository.create(user);
  }

  async getById(id: number) {
    return this.appointmentsRepository.findById(id);
  }

  async update(id: number, user: Appointment) {
    return await this.appointmentsRepository.update(id, user);
  }

  async delete(id: number) {
    return await this.appointmentsRepository.delete(id);
  }
}
