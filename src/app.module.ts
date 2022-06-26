import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { AppointmentsModule } from './appointments/appointments.module';
import { WorkshopModule } from './workshop/workshop.module';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AutomapperModule.forRoot({ strategyInitializer: classes() }),
    UsersModule,
    AppointmentsModule,
    WorkshopModule,
    ChatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
