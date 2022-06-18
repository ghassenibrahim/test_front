import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})

export class TimePipe implements PipeTransform {

  constructor() { }

  transform(value: string): string {
    if (value && value.length >= 5) {
      return value.substr(0, 5);
    }
    return null;
  }
}
