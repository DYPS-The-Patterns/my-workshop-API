import { Module } from '@nestjs/common';
import { ChatsService } from './domain/services/chats.service';
import { ChatsController } from './interface/rest/chats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from './infrastructure/persistence/entities/chat.entity';
import { UsersEntityRepository } from '../users/infrastructure/persistence/repositories/users.repository';
import { CHATS_REPOSITORY } from './domain/repositories/chats.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity])],
  providers: [
    { useClass: UsersEntityRepository, provide: CHATS_REPOSITORY },
    ChatsService,
  ],
  controllers: [ChatsController],
})
export class ChatsModule {}
