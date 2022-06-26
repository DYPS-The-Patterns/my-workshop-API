import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export class message {}
@Entity('chats')
export class ChatEntity {
  @PrimaryGeneratedColumn()
  chatid: number;

  @Column()
  name: string;
  @Column()
  messages: message;
}
