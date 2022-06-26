import { ChatsRepository } from './chats.repository';

describe('ChatsRepository', () => {
  it('should be defined', () => {
    expect(new ChatsRepository()).toBeDefined();
  });
});
