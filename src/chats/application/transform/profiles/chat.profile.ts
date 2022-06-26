import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper, MappingProfile } from '@automapper/core';
import { ChatModel } from '../../../domain/entities/chat.model';
import { ChatDto } from '../dto/chat.dto';
import { ChatEntity } from '../../../infrastructure/persistence/entities/chat.entity';

export class ChatProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, ChatModel, ChatDto);
      createMap(mapper, ChatModel, ChatEntity);
      createMap(mapper, ChatEntity, ChatModel);
      createMap(mapper, Update);
    };
  }
}
