import {Component, OnDestroy} from '@angular/core';
import {Vote} from "../../../models/vote";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html'
})
export class VotingHistoryComponent implements OnDestroy {

  votes: Vote[] = [];
  private voteListSub;

  constructor(private voteService: VoteService) {
    this.voteListSub = this.voteService.voteListObs.subscribe(votes => this.votes = votes);
  }

  onDeleteRequest(vote: Vote) {
    this.votes.splice(this.votes.indexOf(vote), 1)
  }

  ngOnDestroy(): void {
    this.voteListSub.unsubscribe();
  }
}
