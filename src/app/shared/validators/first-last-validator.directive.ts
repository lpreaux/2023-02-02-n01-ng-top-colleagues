import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective , multi: true}]
})
export class FirstLastValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const isInvalid = control.value.first === control.value.last && control.value.first?.length > 0;
    return isInvalid ? { firstLast : 'first name must be different from lastname' } : null;
  }

}
