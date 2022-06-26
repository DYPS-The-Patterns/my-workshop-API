import { AppointmentsRepository } from '../../../domain/repositories/appointments.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AppointmentEntity } from '../entities/appointment.entity';
import { Repository } from 'typeorm';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Appointment } from '../../../domain/entities/appointment.model';

export class AppointmentsEntityRepository implements AppointmentsRepository {
  constructor(
    @InjectRepository(AppointmentEntity)
    private appointmentsRepository: Repository<AppointmentEntity>,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async create(appointment: Appointment): Promise<Appointment> {
    let appointmentEntity = this.mapper.map(
      appointment,
      Appointment,
      AppointmentEntity,
    );
    appointmentEntity = this.appointmentsRepository.create(appointmentEntity);
    await this.appointmentsRepository.save(appointmentEntity);
    return this.mapper.map(appointmentEntity, AppointmentEntity, Appointment);
  }
  async delete(id: number): Promise<{ delete: boolean }> {
    await this.appointmentsRepository.delete({ id });
    return { delete: false };
  }

  async findAll(): Promise<Appointment[]> {
    return await this.appointmentsRepository.find();
  }

  async findById(id: number) {
    return await this.appointmentsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, appointment: Appointment): Promise<Appointment> {
    let appointmentEntity = this.mapper.map(
      appointment,
      Appointment,
      AppointmentEntity,
    );
    await this.appointmentsRepository.update({ id }, appointmentEntity);
    appointmentEntity = await this.appointmentsRepository.findOne({ id });
    return this.mapper.map(appointmentEntity, AppointmentEntity, Appointment);
  }
}
