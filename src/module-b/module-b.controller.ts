import { Injectable } from '@nestjs/common';
import { ContextService } from '../context.service';

@Injectable()
export class ServiceB {
  constructor(private readonly contextService: ContextService) {}

  doSomething() {
    return this.contextService.get('someKey');
  }
}
