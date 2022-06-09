import { Module } from '@nestjs/common';
import { AppointmentsService } from './domain/services/appointments.service';
import { AppointmentsController } from './interface/rest/appointments.controller';

@Module({
  providers: [AppointmentsService],
  controllers: [AppointmentsController]
})
export class AppointmentsModule {}
