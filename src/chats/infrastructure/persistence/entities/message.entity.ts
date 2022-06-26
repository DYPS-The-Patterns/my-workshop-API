import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';

@Entity('messages')
export class MessageEntity {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;
  @AutoMap()
  @Column()
  content: string;
  @AutoMap()
  @Column()
  senderID: number;
  @AutoMap()
  @Column()
  receiverID: number;
}
