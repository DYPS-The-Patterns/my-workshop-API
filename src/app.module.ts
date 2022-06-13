import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { WorkshopService } from './workshop/domain/services/workshop.service';
import { WorkshopModule } from './workshop/workshop.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AutomapperModule.forRoot({ strategyInitializer: classes() }),
    UsersModule,
    WorkshopModule,
  ],
  controllers: [AppController],
  providers: [AppService, WorkshopService],
})
export class AppModule {}
