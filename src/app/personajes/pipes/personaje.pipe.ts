import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../interfaces/personajes.interface';

@Pipe({
  name: 'personaje'
})
export class PersonajePipe implements PipeTransform {

  transform(value: Result, ...args: unknown[]): unknown {
    return value.name;
  }

}
