import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'llevaFecha'
})
export class llevaFechaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === undefined) {
      return ""
    }
    return `( ${value} )`;
  }

}
