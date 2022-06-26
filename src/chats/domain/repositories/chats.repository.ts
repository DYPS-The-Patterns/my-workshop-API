import { ChatModel } from '../entities/chat.model';
export class ChatsRepository {}
export const CHATS = 'ChatsRepository';
export interface ChatsRepository {
  findAll(): Promise<ChatModel[]>;
  create(chatModel: ChatModel): Promise<ChatModel>;
  findById(id: number): Promise<ChatModel>;
  update(id: number, user: ChatModel): Promise<ChatModel>;
  delete(id: number): Promise<{ delete: boolean }>;
}
