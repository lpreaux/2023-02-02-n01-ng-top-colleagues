import {Component, OnDestroy} from '@angular/core';
import {VoteService} from "../../../providers/vote.service";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnDestroy{
  likeCounter: number = 0;
  hateCounter: number = 0;

  newVoteSub;

  constructor(private voteService: VoteService) {
    this.newVoteSub = this.voteService.newVoteObs.subscribe(
      (data: LikeHate) => {
        switch (data) {
          case LikeHate.LIKE:
            this.likeCounter ++;
            break;
          case LikeHate.HATE:
            this.hateCounter ++;
            break;
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.newVoteSub.unsubscribe();
  }

}
