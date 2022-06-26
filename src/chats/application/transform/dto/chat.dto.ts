import { AutoMap } from '@automapper/classes';

export class message {}
export class ChatDto {
  @AutoMap()
  chatid: number;
  @AutoMap()
  name: string;
  @AutoMap()
  messages: message;
}
