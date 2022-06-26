import { Inject, Injectable } from '@nestjs/common';
import {
  CHATS_REPOSITORY,
  ChatsRepository,
} from '../repositories/chats.repository';
import { ChatModel } from '../entities/chat.model';

@Injectable()
export class ChatsService {
  constructor(
    @Inject(CHATS_REPOSITORY)
    private readonly chatsRepository: ChatsRepository,
  ) {}

  async getAll() {
    return await this.chatsRepository.findAll();
  }

  async create(chat: ChatModel) {
    return await this.chatsRepository.create(chat);
  }

  async getById(id: number) {
    return await this.chatsRepository.findById(id);
  }
  async update(id: number, chat: ChatModel) {
    return await this.chatsRepository.update(id, chat);
  }

  async delete(id: number) {
    return await this.chatsRepository.delete(id);
  }
}
