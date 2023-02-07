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
  @Input() colleague?: Colleague;

  likeButtonDisabled = false;
  hateButtonDisabled = false;

  constructor(
    private voteService: VoteService
  ) {}

  ngOnInit(): void {
    this.likeHateDisableling();
  }


  postVote(likeHate: LikeHate) {
    if (!this.colleague) throw `Field this.colleague is invalid. Here: this.colleague = ${this.colleague}`
    this.voteService.newVote({pseudo: this.colleague.pseudo, like_hate: likeHate});
  }

  likeHateDisableling() {
    if (!this.colleague) throw `Field this.colleague is invalid. Here: this.colleague = ${this.colleague}`
    this.likeButtonDisabled = this.colleague.score >= 1000;
    this.hateButtonDisabled = this.colleague.score <= -1000;
  }
}
