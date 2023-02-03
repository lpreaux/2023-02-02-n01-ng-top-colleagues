import {Component} from '@angular/core';
import {Vote} from "./models/vote";
import {LikeHate} from "./models/like-hate";

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';

  vote1: Vote = {
    colleague: {
      pseudo: "jSparrow",
      score: -1000,
      photo: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    vote: LikeHate.LIKE
  }

  vote2: Vote = {
    colleague: {
      pseudo: "jSparrow",
      score: -1000,
      photo: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    vote: LikeHate.HATE
  }
  constructor() {
  }

  deleteBtn(event: any) {
    console.dir(event)
  }
}
