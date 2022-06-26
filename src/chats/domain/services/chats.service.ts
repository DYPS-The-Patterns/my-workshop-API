import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatEntity } from '../../infrastructure/persistence/entities/chat.entity';
import { Repository } from 'typeorm';
import { ChatDto } from '../../application/Transform/dto/chat.dto';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(ChatEntity)
    private ChatsRepository: Repository<ChatEntity>,
  ) {}

  async getAll() {
    return await this.ChatsRepository.find();
  }

  async create(data: ChatDto) {
    const chat = this.ChatsRepository.create(data);
    await this.ChatsRepository.save(data);
    return chat;
  }

  async getById(id: number) {
    return await this.ChatsRepository.findOne({ where: { chatid: id } });
  }
  async update(id: number, chat: ChatEntity) {
    return await this.ChatsRepository.update(id, chat);
  }

  async delete(id: number) {
    return await this.ChatsRepository.delete(id);
  }
}
