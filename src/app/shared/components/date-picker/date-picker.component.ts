import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {DateFormats} from './date-formats';
import {DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE} from 'ng-pick-datetime';
import {MomentDateTimeAdapter} from 'ng-pick-datetime-moment';
import * as _moment from 'moment';
import {Moment} from 'moment';
import {DatePickerType, DateValueType} from './date-picker-type.type';
import {LangService} from '../../services/lang.service';

/***
 * @Author Fakhreddine GHEDIRA
 *
 * this component render a date picker
 *
 * @Input('formControlName') formControlName: string; form controle name in case of reactive forms
 * @Input() datePickerType: DatePickerType; Date Picker Type it must be one of the following values:
 * 'YEAR_MONTH' | 'FULL_DATE' | 'FULL_DATE_TIME' | 'TIME'
 * @Input() placeHolder: string; Place holder label
 * @Input() value: any; (optional) Default Value
 * @Output() valueChange = new EventEmitter(); this is a event will fired when the value changed in UI

 * @HowToUse
 //----------------<my.component.ts>-------------------------
 @Component({
.....
  })
 export class MyComponent implements OnInit{
    ngOnInit() {
        this.myFormGroup = new FormGroup({
        ....
        myFormControle: new FormControl({value: null, disabled: false}, Validators.required),
        ....
        });
    }
    dateChange($event){
      console.log($event);
    }
  }

 //----------------<my.component.html>
 <app-date-picker
 [formControlName]="'myFormControle'"
 [placeholder]="'Enter Date'"
 [datePickerType]="'FULL_DATE'"      ------->  'YEAR_MONTH' | 'FULL_DATE' | 'FULL_DATE_TIME' | 'TIME'
 (dateChange)="dateChange($event)"
 class="col-md-6">
 </app-date-picker>

 */
const moment = (_moment as any).default ? (_moment as any).default : _moment;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent), // Name of our component
      multi: true
    }
    ,
    DateFormats,
    LangService,
    {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},

    {
      provide: OWL_DATE_TIME_FORMATS,
      deps: [LangService],
      useFactory: () => {
        if (LangService.getCurrentLanguageCode() === 'fr') {
          return DateFormats.FR_FORMATS;
        } else {
          return DateFormats.EN_FORMATS;
        }
      }
    }
  ]
})

export class DatePickerComponent implements ControlValueAccessor, OnInit {
  dateFormControl = new FormControl();
  public _disabled;
  get disabled(): boolean {
    return this._disabled;
  }

  @Input() formControlName: string;

  @Input()
  set disabled(val: boolean) {
    this._disabled = val;
  }

  @Input() datePickerType: DatePickerType;
  @Input() valueType: DateValueType;
  @Input() placeHolder: string;
  @Input() value: any;
  @Input() required = false;
  @Output() valueChange = new EventEmitter();
  @Input() hasError ;
  @Input() isValid;
  @Input() format = 'YYYY-MM-DDTHH:mm:ss';
  @Input() startView: 'month' | 'year' | 'multi-years';
  @Input() startAt: Date;
  @Input() firstDayOfWeek ? = 1;
  @Input() min?;
  @Input() max?;
  @Output() toggleClicked = new EventEmitter();
  @Input() dateTimeFilter: (date: Date | null) => boolean;
  lang;

  ngOnInit(): void {
    switch (this.lang) {
      case 'fr' :
        this.dateTimeAdapter.setLocale('fr-FR');
        break;
      case 'en' :
        this.dateTimeAdapter.setLocale('en-GB');
        break;
      default :
        this.dateTimeAdapter.setLocale('fr-FR');
        break;
    }
  }

  constructor(public dateTimeAdapter: DateTimeAdapter<any>) {
  }

  writeValue(date: any): void {
    if (date) {
      this.value = date;
    } else {
      this.value = null;
    }
  }

  // registers 'fn' that will be fired when changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  onTouch = (_: any) => {
  };

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onChange(value: Moment) {
    if (value) {

      switch (this.valueType) {
        case 'string' :
          this.value = value.format(this.format);
          this.writeValue(value.format(this.format));
          this.propagateChange(value.format(this.format));
          this.onTouch(true);
          this.valueChange.emit(value.format(this.format));
          this.dateFormControl.setValue(value.format(this.format));
          break;
        case 'moment' :
          this.value = value;
          this.writeValue(value);
          this.propagateChange(value);
          this.onTouch(true);
          this.valueChange.emit(value);
          this.dateFormControl.setValue(value);
          break;
        case 'date' :
          this.value = value.toDate();
          this.writeValue(value.toDate());
          this.propagateChange(value.toDate());
          this.onTouch(true);
          this.valueChange.emit(value.toDate());
          this.dateFormControl.setValue(value.toDate());
          break;
        default :
          this.value = value.format('YYYY-MM-DDTHH:mm:ss');
          this.writeValue(value.format('YYYY-MM-DDTHH:mm:ss'));
          this.propagateChange(value.format('YYYY-MM-DDTHH:mm:ss'));
          this.onTouch(true);
          this.valueChange.emit(value.format('YYYY-MM-DDTHH:mm:ss'));
          this.dateFormControl.setValue(value.format('YYYY-MM-DDTHH:mm:ss'));
          break;
      }
    } else {
      this.value = null;
      this.writeValue(null);
      this.propagateChange(null);
      this.onTouch(true);
      this.valueChange.emit(null);
      this.dateFormControl.setValue(null);
    }
  }

  // the method set in registerOnChange, it is just
  // a placeholder for a method that takes one parameter,
  // we use it to emit changes back to the form
  public propagateChange = (_: any) => {
  };

}
