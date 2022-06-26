import { Module } from '@nestjs/common';
import { DriversModule } from './drivers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerEntity } from './infrastructure/persistence/entities/owner.entity';
import { OwnersEntityRepository } from './infrastructure/persistence/repositories/owners.repository';
import { OWNERS_REPOSITORY } from './domain/repositories/owners.repository';
import { OwnerProfile } from './application/transform/profiles/owner.profile';
import { OwnersService } from './domain/services/owners.service';
import { OwnersController } from './interface/rest/owners.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OwnerEntity])],
  providers: [
    { useClass: OwnersEntityRepository, provide: OWNERS_REPOSITORY },
    OwnerProfile,
    OwnersService,
  ],
  controllers: [OwnersController],
})
export class OwnersModule {}
