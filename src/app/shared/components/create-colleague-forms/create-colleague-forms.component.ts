import { Component } from '@angular/core';
import {ColleagueApi} from "../../../models/colleague-api";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {
  colleague: ColleagueApi  = {
    pseudo: '',
    photo: '',
    first: '',
    last: '',
  };

  constructor(
    private colleagueService: ColleagueService
  ) { }
  submit() {
    this.colleagueService.post(this.colleague).subscribe();
  }
}
