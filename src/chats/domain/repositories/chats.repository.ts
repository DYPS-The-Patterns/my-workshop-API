import { ChatModel } from '../entities/chat.model';

export const CHATS_REPOSITORY = 'ChatsRepository';
export interface ChatsRepository {
  findAll(): Promise<ChatModel[]>;
  create(chatModel: ChatModel): Promise<ChatModel>;
  findById(id: number): Promise<ChatModel>;
  update(id: number, chat: ChatModel): Promise<ChatModel>;
  delete(id: number): Promise<{ delete: boolean }>;
}
