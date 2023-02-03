import { Component } from '@angular/core';
import {Vote} from "../../../models/vote";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html'
})
export class VotingHistoryComponent {

  votes: Vote[] = [
    {
      colleague: {
        pseudo: "jSparrow",
        score: -1000,
        photo: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      vote: LikeHate.LIKE
    },
    {
      colleague: {
        pseudo: "jSparrow",
        score: -1000,
        photo: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      vote: LikeHate.HATE
    }
  ];


  onDeleteRequest(vote: Vote) {
    this.votes.splice(this.votes.indexOf(vote), 1)
  }
}
