import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {OWL_DATE_TIME_FORMATS, OwlDateTimeComponent, OwlDateTimeFormats} from 'ng-pick-datetime';
import * as _moment from 'moment';
import {Moment} from 'moment';

const moment = (_moment as any).default ? (_moment as any).default : _moment;

export const YEAR_MONTH: OwlDateTimeFormats = {
  parseInput: 'MM/YYYY',
  fullPickerInput: 'l LT',
  datePickerInput: 'MM/YYYY',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};

/***
 *
 * Year and month picker
 * */
@Component({
  selector: 'app-year-month-picker',
  templateUrl: 'year-month-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: OWL_DATE_TIME_FORMATS, useValue: YEAR_MONTH},
  ],
})
export class YearMonthPickerComponent implements OnChanges {

  @Input() value;
  @Input() placeHolder;
  @Input() required;
  @Input() hasError: boolean;
  @Input() isValid: boolean;
  @Output() dateChange = new EventEmitter();
  @Output() toggleClicked = new EventEmitter();
  @Input() startView = 'multi-years';
  @Input() min?;
  @Input() max?;
  @Input() owlDateTimeFilter: (date: Date | null) => boolean;
  @Input()
  set disabled(val: boolean) {
    val ? this.yearMonth.disable() : this.yearMonth.enable();
  }
  onValueChange = (value: any) => {
    this.dateChange.emit(value);
  };
  public yearMonth = new FormControl();

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.value) {
      this.yearMonth.setValue(changes.value.currentValue);
    }
  }

  chosenYearHandler(normalizedYear: Moment) {
    if (!this.yearMonth.value) {
      this.yearMonth.setValue(moment());
    }
    const ctrlValue = this.yearMonth.value;
    ctrlValue.year(normalizedYear.year());
    this.yearMonth.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: OwlDateTimeComponent<Moment>) {
    if (!this.yearMonth.value) {
      this.yearMonth.setValue(moment());
    }
    const ctrlValue = this.yearMonth.value;
    ctrlValue.month(normalizedMonth.month());
    this.yearMonth.setValue(ctrlValue);
    this.dateChange.emit(ctrlValue);
    datepicker.close();
  }

}
