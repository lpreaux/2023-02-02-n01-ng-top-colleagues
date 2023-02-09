import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {ColleagueService} from "../../providers/colleague.service";
import {catchError, map, Observable, of} from "rxjs";

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective, multi: true}]
})
export class PseudoValidatorDirective implements AsyncValidator {

  constructor(
    private colleagueService: ColleagueService
  ) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.colleagueService.getByPseudo(control.value)
      .pipe(
        map(() => { return {pseudo: 'pseudo already taken'}; }),
        catchError( () => { return of(null) })
      );
  }

}
