import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BetaController } from './beta.controller';
import { BetaService } from './beta.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ALPHA_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
    ]),
  ],
  controllers: [BetaController],
  providers: [BetaService],
})
export class BetaModule {}
