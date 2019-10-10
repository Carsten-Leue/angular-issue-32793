import { Type } from '@angular/core';

export function TestDirective<T extends Type<any>>(): (cls: T) => void {
  return (cls: T) => {
    console.log('TestDirective', cls);
  };
}

