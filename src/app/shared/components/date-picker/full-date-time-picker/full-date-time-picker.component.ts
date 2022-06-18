import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-full-date-time-picker',
  templateUrl: 'full-date-time-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullDateTimePickerComponent {
  @Input() value;
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
  @Input()
  set disabled(val: boolean) {
    val ? this.formControl.disable() : this.formControl.enable();
  }
  formControl = new FormControl();
  onValueChange = (event: any) => {
    this.dateChange.emit(event.value);
  };
}
