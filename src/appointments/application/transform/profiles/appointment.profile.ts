import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper, MappingProfile } from '@automapper/core';
import { Appointment } from '../../../domain/entities/appointment.model';
import { AppointmentDto } from '../dto/appointment.dto';
import { AppointmentEntity } from '../../../infrastructure/persistence/entities/appointment.entity';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';

export class AppointmentProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, Appointment, AppointmentDto);
      createMap(mapper, Appointment, AppointmentEntity);
      createMap(mapper, AppointmentEntity, Appointment);
      createMap(mapper, CreateAppointmentDto, Appointment);
      createMap(mapper, UpdateAppointmentDto, Appointment);
    };
  }
}
