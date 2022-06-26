import { Entity } from 'typeorm';
import { AutoMap } from '@automapper/classes';

@Entity('messages')
export class MessageEntity {
  @AutoMap()
  id: number;
  @AutoMap()
  content: string;
  @AutoMap()
  senderID: number;
  @AutoMap()
  receiverID: number;
}
