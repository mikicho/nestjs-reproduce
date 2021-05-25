import { Module } from '@nestjs/common';
import { ServiceB } from './module-b.controller';
import { ContextService } from '../context.service';

@Module({
  imports: [],
  providers: [ContextService, ServiceB],
  exports: [ServiceB]
})
export class ModuleB {}
