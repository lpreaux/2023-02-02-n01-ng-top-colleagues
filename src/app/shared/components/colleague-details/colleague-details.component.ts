import {Component, Input} from '@angular/core';
import {ColleagueApi} from "../../../models/colleague-api";
import {Observable} from "rxjs";

@Component({
  selector: 'tc-colleague-details',
  templateUrl: './colleague-details.component.html',
  styleUrls: ['./colleague-details.component.scss']
})
export class ColleagueDetailsComponent {
  private _colleague!: ColleagueApi;
  get colleague(): ColleagueApi {
    return this._colleague;
  }
  @Input() set colleague(colleague: ColleagueApi | Observable<ColleagueApi>) {
    if (colleague instanceof Observable) colleague.subscribe(col => this._colleague = col);
    else this._colleague = colleague;
  }
}
