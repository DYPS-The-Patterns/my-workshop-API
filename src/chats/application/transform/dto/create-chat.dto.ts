export class message {}
export class CreateChatDto {
  chatId: number;
  name: string;
  messages: message;
}
