import { WorkshopService } from './domain/services/workshop.service';
import { WorkshopsController } from './interface/rest/workshops.controller';

@Module({
  providers: [WorkshopService],
  controllers: [WorkshopsController]
})
export class WorkshopModule {}