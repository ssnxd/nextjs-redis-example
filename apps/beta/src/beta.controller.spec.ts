import { Test, TestingModule } from '@nestjs/testing';
import { BetaController } from './beta.controller';
import { BetaService } from './beta.service';

describe('BetaController', () => {
  let betaController: BetaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BetaController],
      providers: [BetaService],
    }).compile();

    betaController = app.get<BetaController>(BetaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(betaController.getHello()).toBe('Hello World!');
    });
  });
});
