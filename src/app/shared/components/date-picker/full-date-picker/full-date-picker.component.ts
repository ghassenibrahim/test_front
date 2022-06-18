import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-full-date-picker',
  templateUrl: 'full-date-picker.component.html',
})
export class FullDatePickerComponent {
  @Input() value: any;
  formControl = new FormControl();

  @Input()
  set disabled(val: boolean) {
    val ? this.formControl.disable() : this.formControl.enable();
  }
  @Input() placeHolder;
  @Input() required;
  @Input() hasError: boolean;
  @Input() isValid: boolean;
  @Input() startView: 'month' | 'year' | 'multi-years' = 'month';
  @Output() dateChange = new EventEmitter();
  @Output() toggleClicked = new EventEmitter();
  @Input() startAt: Date;
  @Input() firstDayOfWeek ? = 1;
  @Input() min?;
  @Input() max?;
  @Input() owlDateTimeFilter: (date: Date | null) => boolean;
  onValueChange = (event: any) => {
    this.dateChange.emit(event.value);
  }


}
