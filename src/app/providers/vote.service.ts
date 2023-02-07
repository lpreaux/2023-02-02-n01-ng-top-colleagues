import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Colleague} from "../models/colleague";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private voteListSub = new Subject<Vote[]>();

  get voteListObs() {
    return this.voteListSub.asObservable();
  }

  private voteAction = new Subject<LikeHate>();

  get newVoteObs() {
    return this.voteAction.asObservable();
  }

  constructor(
    private http: HttpClient,
  ) {
    this.updateVoteList();
  }

  updateVoteList() {
    this.http.get<{colleague: Colleague, like_hate: LikeHate, score: number, created_date: Date}[]>("https://dev.cleverapps.io/api/v2/votes").subscribe(
      data => this.voteListSub.next(data.map(
        vote => {
          return {
            colleague: vote.colleague,
            vote: vote.like_hate,
            score: vote.score,
            createdAt: vote.created_date
          }
        }
      )));
  }

  newVote(newVoteInfo: {pseudo: string, like_hate: LikeHate}) {
    this.http.post("https://dev.cleverapps.io/api/v2/votes", newVoteInfo).subscribe(() => {
      this.updateVoteList();
      this.voteAction.next(newVoteInfo.like_hate);
    });
  }
}
