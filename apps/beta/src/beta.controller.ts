import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BetaService } from './beta.service';

@Controller()
export class BetaController {
  constructor(@Inject('ALPHA_SERVICE') private alphaService: ClientProxy) {}

  @Get()
  getHello(): any {
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3];
    return this.alphaService.send<number>(pattern, payload);
  }
}
