import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ContextService } from '../context.service';
import { ModuleB } from '../module-b/module-b.module';

@Module({
  imports: [ModuleB],
  controllers: [AppController],
  providers: [ContextService],
})
export class AppModule {}
