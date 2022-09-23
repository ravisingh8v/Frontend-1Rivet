import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cureency'
})
export class CureencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
