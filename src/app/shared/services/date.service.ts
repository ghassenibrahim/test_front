import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import {DatePipe} from "@angular/common";
export enum DATE_ATTRIBUTE{
    MINUTE,
    HOUR,
    DAY,
    MONTH,
    YEAR,
    UTC
  }

@Injectable({providedIn: 'root'})
export class DateService {
    constructor() {
    }

    getUtcStringDate( date: any ): string {
        if ( isNaN( date ) ) {
            return null;
        }
        return new DatePipe('en-US').transform(date, 'yyyy-dd-MM');
    }

    getUtcStringDateTime( date: any ): string {
        if ( isNaN( date ) ) {
            return undefined;
        }
        return new DatePipe('en-US').transform(date, 'yyyy-dd-MM');
    }

}
