import { Module } from '@nestjs/common';
import { ChatsService } from './domain/services/chats.service';
import { ChatsController } from './interface/rest/chats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from './infrastructure/persistence/entities/chat.entity';
import { ChatsEntityRepository } from './infrastructure/persistence/repositories/chats.repository';
import { CHATS } from './domain/repositories/chats.repository';
import { ChatProfile } from './application/transform/profiles/chat.profile';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity])],
  providers: [
    { useClass: ChatsEntityRepository, provide: CHATS },
    ChatsService,
    ChatProfile,
  ],
  controllers: [ChatsController],
})
export class ChatsModule {}
