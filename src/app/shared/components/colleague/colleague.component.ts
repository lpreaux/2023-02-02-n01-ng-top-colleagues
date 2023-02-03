import {Component, Input, OnInit} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit{
  @Input() colleague: Colleague = {
    pseudo: "",
    score: 0,
    photo: ""
  };

  likeButtonDisabled = false;
  hateButtonDisabled = false;

  ngOnInit(): void {
    this.likeHateDisableling();
  }


  updateScore(likeHate: LikeHate) {
    switch (likeHate) {
      case LikeHate.LIKE:
        this.colleague.score ++;
        break;
      case LikeHate.HATE:
        this.colleague.score --;
    }
    this.likeHateDisableling()
  }

  likeHateDisableling() {
    this.likeButtonDisabled = this.colleague.score >= 1000;
    this.hateButtonDisabled = this.colleague.score <= -1000;
  }
}
