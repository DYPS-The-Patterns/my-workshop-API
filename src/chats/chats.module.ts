import { Module } from '@nestjs/common';
import { ChatsService } from './domain/services/chats.service';
import { ChatsController } from './interface/rest/chats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from './infrastructure/persistence/entities/chat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity])],
  providers: [ChatsService],
  controllers: [ChatsController],
})
export class ChatsModule {}
