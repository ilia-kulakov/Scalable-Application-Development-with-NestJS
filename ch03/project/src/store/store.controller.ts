import {
  Controller,
  UseFilters,
  Get,
  Param,
  HttpException,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreFilter } from './store.filter';

@Controller('store')
@UseFilters(new StoreFilter())
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  findAll(): string {
    return this.storeService.performTask();
  }

  @Get('details')
  fetchDetails(): string {
    return 'Fetching the details for you!';
  }

  @Get('exception')
  throwException(): string {
    throw new HttpException('Something realy bad happened', 500);
  }

  @Get('products/:productId')
  fetchProductDetails(@Param('productId') productId: string): string {
    return `Details for product with ID: ${productId}`;
  }
}
