import { Test, TestingModule } from '@nestjs/testing';
import { ResponseEngineController } from './response-engine.controller';

describe('ResponseEngineController', () => {
  let controller: ResponseEngineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponseEngineController],
    }).compile();

    controller = module.get<ResponseEngineController>(ResponseEngineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
