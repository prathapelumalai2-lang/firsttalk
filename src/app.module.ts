import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { ResponseEngineModule } from './response-engine/response-engine.module';

@Module({
  imports: [HttpModule, ResponseEngineModule],
  controllers: [AppController],
})
export class AppModule {}
