import { NestFactory } from '@nestjs/core';
import { BetaModule } from './beta.module';

async function bootstrap() {
  const app = await NestFactory.create(BetaModule);
  await app.listen(3000);
}
bootstrap();
