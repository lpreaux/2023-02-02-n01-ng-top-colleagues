import { Component } from '@angular/core';
import {ColleagueApi} from "../../../models/colleague-api";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {
  colleague: ColleagueApi = {
    pseudo: '',
    photo: '',
    first: '',
    last: '',
  };
  submit() {
    console.log(this.colleague);
  }
}
