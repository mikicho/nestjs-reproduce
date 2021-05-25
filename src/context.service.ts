import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class ContextService {
  private cache: any = {};

  set(key: string, value: string) {
    this.cache[key] = value;
  }

  get(key: string) {
    return this.cache[key];
  }
}
