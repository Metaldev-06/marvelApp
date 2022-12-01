import { Pipe, PipeTransform } from '@angular/core';
import { Thumbnail } from '../interfaces/personajes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: Thumbnail, arg?: boolean): string {
    if (arg) {
      return `${value.path}.${value.extension}`;
    }
    return `${value.path}/detail.${value.extension}`;
  }

}
