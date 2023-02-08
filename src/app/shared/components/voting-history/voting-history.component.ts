import {Component, OnInit} from '@angular/core';
import {VoteService} from "../../../providers/vote.service";
import {VoteApi} from "../../../models/vote-api";
import {Observable} from "rxjs";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html'
})
export class VotingHistoryComponent implements OnInit {

  votes$!: Observable<VoteApi[]>;

  constructor(
    private voteService: VoteService
  ) { }


  ngOnInit(): void {
    this.updateList()
    this.voteService.voteObs.subscribe(() => this.updateList());
  }

  updateList() {
    this.votes$ = this.voteService.list();
  }

  onDeleteRequest(vote: VoteApi) {
    this.votes$.subscribe(votes => votes.splice(votes.indexOf(vote), 1));
  }
}
