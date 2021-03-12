import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeUno'
})
export class PipeUnoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
