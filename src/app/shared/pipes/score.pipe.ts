import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value.toLocaleString('fr-FR', {signDisplay: "exceptZero"});
  }
}
