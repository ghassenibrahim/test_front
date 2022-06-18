import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DatePickerComponent} from './date-picker.component';
import {YearMonthPickerComponent} from './year-month-picker/year-month-picker.component';
import {TimePickerComponent} from './time-picker/time-picker.component';
import {FullDateTimePickerComponent} from './full-date-time-picker/full-date-time-picker.component';
import {FullDatePickerComponent} from './full-date-picker/full-date-picker.component';
import {MaterialModule} from '../../modules/material.module';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DatePickerComponent,
    YearMonthPickerComponent,
    TimePickerComponent,
    FullDateTimePickerComponent,
    FullDatePickerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    MaterialModule,
    RouterModule,
    OwlDateTimeModule,
    ReactiveFormsModule
  ],
  exports: [
    DatePickerComponent,
    YearMonthPickerComponent,
    TimePickerComponent,
    FullDateTimePickerComponent,
    FullDatePickerComponent
  ],
  providers: []
})
export class DatePickerModule {
}
