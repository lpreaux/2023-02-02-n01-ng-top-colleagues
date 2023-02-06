import {Component, Input, OnInit} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {ColleagueService} from "../../../providers/colleague.service";

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

  constructor(private colleagueService: ColleagueService) {}

  updateScore(likeHate: LikeHate) {
    this.colleagueService.vote(this.colleague, likeHate);
  }

  likeHateDisableling() {
    this.likeButtonDisabled = this.colleague.score >= 1000;
    this.hateButtonDisabled = this.colleague.score <= -1000;
  }
}
