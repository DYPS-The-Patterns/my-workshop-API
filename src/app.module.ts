import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { WorkshopModule } from './workshop/workshop.module';
import { AppointmentsModule } from './appointments/appointments.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AutomapperModule.forRoot({ strategyInitializer: classes() }),
    UsersModule,
    WorkshopModule,
    AppointmentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
