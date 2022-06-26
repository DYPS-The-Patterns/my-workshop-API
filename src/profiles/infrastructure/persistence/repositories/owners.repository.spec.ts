import { OwnersRepository } from './owners.repository';

describe('OwnersRepository', () => {
  it('should be defined', () => {
    expect(new OwnersRepository()).toBeDefined();
  });
});
