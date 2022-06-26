import { ChatModel } from './chat.entity';

describe('ChatsEntity', () => {
  it('should be defined', () => {
    expect(new ChatModel()).toBeDefined();
  });
});
