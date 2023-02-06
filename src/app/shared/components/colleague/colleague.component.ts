import {Component, Input, OnInit} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html'
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

  constructor(private voteService: VoteService) {
  }

  updateScore(likeHate: LikeHate) {
    switch (likeHate) {
      case LikeHate.LIKE:
        this.colleague.score ++;
        this.voteService.newVote({colleague: this.colleague, vote: LikeHate.LIKE});
        break;
      case LikeHate.HATE:
        this.colleague.score --;
        this.voteService.newVote({colleague: this.colleague, vote: LikeHate.HATE});
    }
    this.likeHateDisableling()
  }

  likeHateDisableling() {
    this.likeButtonDisabled = this.colleague.score >= 1000;
    this.hateButtonDisabled = this.colleague.score <= -1000;
  }
}
