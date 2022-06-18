import {AbstractControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CustomValidator implements Validators {
  readonly cinPattern: RegExp = /^(0|[0-9]\d*)?$/;
  readonly namePattern: RegExp = /^[a-zA-Z].*/;
  readonly textNumbersAndLettersPattern: RegExp = /^[a-zA-Z0-9]+$/;
  readonly numberPattern: RegExp = /^(0|[0-9]\d*)?$/;


  /**
   * check if at Least One Element In List Validator
   */
  atLeastOneCheckBoxIsChecked(): ValidatorFn {
    return (abstractControl: AbstractControl): { [key: string]: boolean } | null => {
      if (abstractControl) {
        const fg: FormGroup = (abstractControl as FormGroup);
        if (fg.value && fg.value.length) {
          return null;
        } else {
          return {atLeastOneCheckBoxIsCheckedError: true};
        }
      } else {
        return null;
      }
    };
  }
}
