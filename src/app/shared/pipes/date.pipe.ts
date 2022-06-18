import { Pipe, PipeTransform } from '@angular/core';
import {DateService} from '../services/date.service';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'datePipe'
})

export class CustomDatePipe implements PipeTransform {

  constructor(private dateService: DateService) { }

  transform(value: any, format?): string {
    if (!isNaN(Number(value))) {
      if (value) {
        if (format) {
          return new DatePipe('fr-FR').transform(value, format);
        }
        return new DatePipe('fr-FR').transform(value, 'yyyy-dd-MM');
      }
    }
    return null;
  }
}
