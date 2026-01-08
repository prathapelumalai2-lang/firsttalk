import { Module } from '@nestjs/common';
import { ResponseEngineController } from './response-engine.controller';

@Module({
  controllers: [ResponseEngineController]
})
export class ResponseEngineModule {}
