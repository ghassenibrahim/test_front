import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  templateUrl: 'time-picker.component.html'
})
export class TimePickerComponent {
  @Input() value;
  @Input() placeHolder;
  @Input() required;
  @Input() hasError: boolean;
  @Input() isValid: boolean;
  @Output() dateChange = new EventEmitter();
  @Output() toggleClicked = new EventEmitter();
  @Input() min?;
  @Input() max?;
  @Input() owlDateTimeFilter: (date: Date | null) => boolean;
  @Input()
  set disabled(val: boolean) {
    val ? this.formControl.disable() : this.formControl.enable();
  }
  formControl = new FormControl();
  onValueChange = (event: any) => {
    this.dateChange.emit(event.value);
  };
}
