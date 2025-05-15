import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { StoreFilter } from './store.filter';

@Module({
  controllers: [StoreController],
  providers: [StoreService, StoreFilter],
})
export class StoreModule {}
