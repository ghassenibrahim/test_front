import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../modules/material.module';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {ReactiveFormsModule} from '@angular/forms';
import {CheckboxListComponent} from './checkbox-list.component';

@NgModule({
  declarations: [
    CheckboxListComponent
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
    CheckboxListComponent
  ],
  providers: []
})
export class CheckboxListModule {
}
