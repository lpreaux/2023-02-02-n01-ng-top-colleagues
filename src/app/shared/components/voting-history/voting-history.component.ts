import { Component } from '@angular/core';
import {Vote} from "../../../models/vote";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html'
})
export class VotingHistoryComponent {

  votes: Vote[] = this.voteService.list();

  constructor(private voteService: VoteService) {
  }


  onDeleteRequest(vote: Vote) {
    this.votes.splice(this.votes.indexOf(vote), 1)
  }
}
