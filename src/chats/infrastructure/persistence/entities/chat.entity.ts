import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';
export class message {}
@Entity('chats')
export class ChatEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  chatid: number;
  @AutoMap()
  @Column()
  name: string;
  @AutoMap()
  @Column()
  messages: message;
}
