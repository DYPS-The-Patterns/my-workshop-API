import { ChatsRepository } from '../../../domain/repositories/chats.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatEntity } from '../entities/chat.entity';
import { Repository } from 'typeorm';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { ChatModel } from '../../../domain/entities/chat.model';

export class ChatsEntityRepository implements ChatsRepository {
  constructor(
    @InjectRepository(ChatEntity)
    private ChatsRepository: Repository<ChatEntity>,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async create(user: ChatModel): Promise<ChatModel> {
    let chatEntity = this.mapper.map(user, ChatModel, ChatEntity);
    chatEntity = this.ChatsRepository.create(chatEntity);
    await this.ChatsRepository.save(chatEntity);
    return this.mapper.map(chatEntity, ChatEntity, ChatModel);
  }

  async delete(chatid: number): Promise<{ delete: boolean }> {
    await this.ChatsRepository.delete({ chatid });
    return { delete: false };
  }

  async findAll(): Promise<ChatModel[]> {
    return await this.ChatsRepository.find();
  }

  async findById(id: number) {
    return await this.ChatsRepository.findOne({ where: { chatid: id } });
  }

  async update(id: number, chat: ChatModel): Promise<ChatModel> {
    let chatEntity = this.mapper.map(chat, ChatModel, ChatEntity);
    await this.ChatsRepository.update(id, chatEntity);
    chatEntity = await this.ChatsRepository.findOne({ where: { chatid: id } });
    return this.mapper.map(chatEntity, ChatEntity, ChatModel);
  }
}
