import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(n: number,extension: string = ' Kilograms') {
    return (n / 1000).toFixed(2) + extension;
  }


}
