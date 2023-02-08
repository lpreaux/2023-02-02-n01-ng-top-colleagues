import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";
import {ScorePipe} from "../../pipes/score.pipe";
import {VoteApi} from "../../../models/vote-api";

@Component({
  selector: 'tc-voting-history-item',
  templateUrl: './voting-history-item.component.html'
})
export class VotingHistoryItemComponent implements OnInit {
  @Input() vote!: VoteApi;
  @Output() deleteRequest = new EventEmitter<VoteApi>();

  message: string = "";

  constructor(
    private scorePipe: ScorePipe
  ) { }
  ngOnInit(): void {
    switch (this.vote.like_hate) {
      case LikeHate.LIKE: {
        console.log("test")
        this.message = `${this.vote.colleague.pseudo} est adoré, il a désormais un score de ${this.scorePipe.transform(this.vote.score)} :-)`
        break;
      }
      case LikeHate.HATE: {
        console.log("test")
        this.message = `${this.vote.colleague.pseudo} est détesté, il a désormais un score de ${this.scorePipe.transform(this.vote.score)} :-(`
      }
    }
  }


  delete() {
    this.deleteRequest.emit(this.vote);
  }
}
