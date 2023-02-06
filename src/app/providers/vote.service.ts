import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private voteAction = new Subject<LikeHate>();

  get newVoteObs() {
    return this.voteAction.asObservable();
  }

  constructor(private http: HttpClient) {}

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
    console.log({
      pseudo: vote.colleague.pseudo,
      like_hate: vote.vote.toString()
    });
    this.http.post("https://dev.cleverapps.io/api/v2/votes", {
      pseudo: vote.colleague.pseudo,
      like_hate: vote.vote.toString()
    }).subscribe(() => {});
    this.voteAction.next(vote.vote);
  }
}
