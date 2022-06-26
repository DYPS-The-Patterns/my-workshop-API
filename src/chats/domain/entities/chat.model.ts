import { Entity } from 'typeorm';
import { AutoMap } from '@automapper/classes';
export class message {}
@Entity('ChatModel')
export class ChatModel {
  @AutoMap()
  chatid: number;

  @AutoMap()
  name: string;
  @AutoMap()
  messages: message;
}
