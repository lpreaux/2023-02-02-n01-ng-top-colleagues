import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vote} from "../../../models/vote";
import {LikeHate} from "../../../models/like-hate";
import {ScorePipe} from "../../pipes/score.pipe";

@Component({
  selector: 'tc-voting-history-item',
  templateUrl: './voting-history-item.component.html'
})
export class VotingHistoryItemComponent implements OnInit{
  @Input() vote?: Vote;
  @Output() deleteRequest = new EventEmitter<Vote>();

  message?: string;

  constructor(private scorePipe: ScorePipe) {

  }
  ngOnInit(): void {
    if (!this.vote) throw new Error("Le vote ne peut pas être vide");
    switch (this.vote.vote) {
      case LikeHate.LIKE: {
        this.message = `${this.vote.colleague.pseudo} est adoré, il a désormais un score de ${this.scorePipe.transform(this.vote.colleague.score)} :-)`
        break;
      }
      case LikeHate.HATE: {
        this.message = `${this.vote.colleague.pseudo} est détesté, il a désormais un score de ${this.scorePipe.transform(this.vote.colleague.score)} :-(`
      }
    }
  }


  delete() {
    this.deleteRequest.emit(this.vote);
  }
}
