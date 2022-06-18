import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

/***
 * @Author Fakhreddine GHEDIRA
 *
 * this component render a date picker
 *
 * @Input('formControlName') formControlName: string; form controle name in case of reactive forms
 * @Input() value: any; (optional) Default Value
 * @Input() dataList: an array of data
 * @Input() fieldId: the name of the id field
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
 <app-checkbox-list formControlName="myFormControle"
 [fieldId]="'id'"
 [visibleFieldName]="'name'"
 [dataList]="reasonsList">
 </app-checkbox-list>

 */
@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxListComponent), // Name of our component
      multi: true
    }
  ]
})

export class CheckboxListComponent implements ControlValueAccessor, OnInit, OnChanges {

  formGroup: FormGroup;
  @Input() dataList: any[];
  @Input() fieldId;
  @Input() visibleFieldName;
  public _disabled;
  get disabled(): boolean {
    return this._disabled;
  }

  @Input() formControlName: string;

  @Input()
  set disabled(val: boolean) {
    this._disabled = val;
  }

  @Input() value: any[];
  @Output() valueChange = new EventEmitter();
  @Input() hasError;
  @Input() isValid;
  lang;

  ngOnInit(): void {
  }

  initForm() {
    this.formGroup = new FormGroup({
      formArray: new FormArray([])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dataList)
    if (this.dataList && this.dataList.length > 0) {
      this.initForm();
      this.dataList.forEach(element => {
        this.addElement(element);
      });
    }
  }

  constructor() {
  }

  writeValue(data: any): void {
    console.log(data)
    if (data) {
      this.value = data;
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

  onChange(value) {
    this.value = value;
    this.writeValue(value);
    this.propagateChange(value);
    this.onTouch(true);
    this.valueChange.emit(value);
  }

  // the method set in registerOnChange, it is just
  // a placeholder for a method that takes one parameter,
  // we use it to emit changes back to the form
  public propagateChange = (_: any) => {
  };

  addElement(value: any) {
    const elementFormGroup = this.createElementFormGroup(value);
    (<FormArray>this.formGroup.get('formArray')).push(elementFormGroup);
  }

  createElementFormGroup(value: any): FormGroup {
    let elementIsChecked = false;
    if (this.value && this.value.length > 0) {
      elementIsChecked = this.value.some(v => v[this.fieldId] === value[this.fieldId]);
    }
    return new FormGroup({
      id: new FormControl(value[this.fieldId]),
      text: new FormControl(value[this.visibleFieldName]),
      checked: new FormControl(elementIsChecked)
    });
  }

  checkSelectedValues() {
    const valueList: any[] = this.formGroup.get('formArray').value;
    const checkedValues: any[] = valueList.filter(element => element.checked);
    const finalValueList: any[] = this.dataList.filter(elem => checkedValues.some(checkedValue => checkedValue.id === elem[this.fieldId]));
    this.onChange(finalValueList);
  }

}
