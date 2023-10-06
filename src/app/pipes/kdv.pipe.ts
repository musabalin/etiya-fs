import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv'
})
export class KdvPipe implements PipeTransform {

  transform(value: number, percent: number = 20): number {
    value += value * (percent / 100);
    return value;
  }

}
