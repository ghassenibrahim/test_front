import { NgModule } from '@angular/core';
import { TextOrientedDirective } from './directives/text-orientation.directive';
import { HttpClientModule } from '@angular/common/http';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoxOrientedDirective } from './directives/box-orientation.directive';
import {MaterialModule} from './modules/material.module';
import {DatePickerModule} from './components/date-picker/date-picker.module';
import {CustomDatePipe} from './pipes/date.pipe';
import {TimePipe} from "./pipes/time.pipe";
import {HomeSpinnerComponent} from "./components/home-spinner/home-spinner.component";
import {CheckboxListModule} from "./components/checkbox-list/checkbox-list.module";


@NgModule({
  declarations: [
    LoaderSpinnerComponent,
    HomeSpinnerComponent,
    TextOrientedDirective,
    BoxOrientedDirective,
    CustomDatePipe,
    TimePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    MaterialModule,
    RouterModule,
    DatePickerModule,
    CheckboxListModule
  ],
  exports: [
    CommonModule,
    LoaderSpinnerComponent,
    HomeSpinnerComponent,
    BoxOrientedDirective,
    TextOrientedDirective,
    TranslateModule,
    MaterialModule,
    DatePickerModule,
    CustomDatePipe,
    TimePipe,
    CheckboxListModule
  ],
  providers: [
    CustomDatePipe,
    TimePipe
  ]
})
export class SharedModule { }
