import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { AppointmentsModule } from './appointments/appointments/appointments.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AppointmentsService } from './appointments/domain/services/appointments.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AutomapperModule.forRoot({ strategyInitializer: classes() }),
    UsersModule,
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppointmentsService],
})
export class AppModule {}
