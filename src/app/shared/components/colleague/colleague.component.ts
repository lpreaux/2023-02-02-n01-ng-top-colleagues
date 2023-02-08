import {Component, Input, OnInit} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit{
  @Input()
  colleague!: Colleague;

  likeButtonDisabled = false;
  hateButtonDisabled = false;

  constructor(
    private voteService: VoteService
  ) {}

  ngOnInit(): void {
    this.likeHateDisabling();
  }

  postVote(likeHate: LikeHate) {
      this.voteService.post({pseudo: this.colleague.pseudo, likeOrHate: likeHate})
        .subscribe(colleague => {
          if (colleague.score != null) {
            this.colleague.score = colleague.score
          }
          this.likeHateDisabling();
        });
  }

  likeHateDisabling() {
    this.likeButtonDisabled = this.colleague.score >= 1000;
    this.hateButtonDisabled = this.colleague.score <= -1000;
  }
}
