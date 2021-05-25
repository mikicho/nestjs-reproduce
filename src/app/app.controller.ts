import { Controller, Get } from '@nestjs/common';
import { ContextService } from '../context.service';
import { ServiceB } from '../module-b/module-b.controller';

@Controller()
export class AppController {
  constructor(
    private readonly serviceB: ServiceB,
    private readonly contextService: ContextService,
  ) {}

  @Get()
  getHello() {
    this.contextService.set('someKey', 'value');
    console.log(this.contextService.get('someKey'));
    console.log(this.serviceB.doSomething());
  }
}
