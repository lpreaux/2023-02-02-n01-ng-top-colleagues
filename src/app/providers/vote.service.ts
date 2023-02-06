import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private voteAction = new Subject<LikeHate>();

  get newVoteObs() {
    return this.voteAction.asObservable();
  }

  list(): Vote[] {
    return [
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
  }

  newVote(vote: Vote) {

    this.voteAction.next(vote.vote);
  }
}
