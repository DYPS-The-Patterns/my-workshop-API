import { Module } from '@nestjs/common';
import { AppointmentsService } from './domain/services/appointments.service';
import { AppointmentsController } from './interface/rest/appointments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentEntity } from './infrastructure/persistence/entities/appointment.entity';
import { AppointmentsEntityRepository } from './infrastructure/persistence/repositories/appointments.repository';
import { APPOINTMENTS_REPOSITORY } from './domain/repositories/appointments.repository';
import { AppointmentProfile } from './application/transform/profiles/appointment.profile';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentEntity])],
  providers: [
    {
      useClass: AppointmentsEntityRepository,
      provide: APPOINTMENTS_REPOSITORY,
    },
    AppointmentProfile,
    AppointmentsService,
  ],
  controllers: [AppointmentsController],
})
export class AppointmentsModule {}
