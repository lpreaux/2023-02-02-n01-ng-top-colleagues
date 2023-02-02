import { Component } from '@angular/core';
import {Colleague} from "./models/colleague";

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
  colleague: Colleague = {
    pseudo: "jSmith",
    score: 0,
    photo: "https://randomuser.me/api/portraits/men/75.jpg"
  };

  constructor() {
  }
}
