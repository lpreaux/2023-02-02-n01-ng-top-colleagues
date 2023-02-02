import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague: Colleague = {
    pseudo: "",
    score: 0,
    photo: ""
  };

  updateScore(likeHate: LikeHate) {
    switch (likeHate) {
      case LikeHate.LIKE:
        this.colleague.score ++;
        break;
      case LikeHate.HATE:
        this.colleague.score --;
    }
  }
}
