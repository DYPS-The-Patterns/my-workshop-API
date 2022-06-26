import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';
export class message {}
@Entity('ChatModel')
export class ChatModel {
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
