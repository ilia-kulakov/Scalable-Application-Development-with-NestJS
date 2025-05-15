import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreService {
  performTask(): string {
    return 'Executing the core task!';
  }
}
