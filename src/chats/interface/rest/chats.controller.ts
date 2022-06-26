import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ChatsService } from '../../domain/services/chats.service';

@Controller('chats')
export class ChatsController {
  constructor(private chatsService: ChatsService) {}

  @Get()
  async getAllChats() {
    const chats = await this.chatsService.getAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Chats fetched succesfully',
      chats,
    };
  }
}
