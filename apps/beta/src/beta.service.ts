import { Injectable } from '@nestjs/common';

@Injectable()
export class BetaService {
  getHello(): string {
    return 'Hello World!';
  }
}
