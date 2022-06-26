import { Entity } from 'typeorm';
import { AutoMap } from '@automapper/classes';
export class message {}
@Entity('chats')
export class ChatEntity {
  @AutoMap()
  chatid: number;

  @AutoMap()
  name: string;
  @AutoMap()
  messages: message;
}
