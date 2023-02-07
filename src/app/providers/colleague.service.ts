import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Colleague } from "../models/colleague";
import { Subject } from "rxjs";
import {LikeHate} from "../models/like-hate";
import {VoteService} from "./vote.service";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private colleagueListSub: Subject<Colleague[]> = new Subject<Colleague[]>();

  get colleagueListObs() {
    return this.colleagueListSub.asObservable();
  }

  constructor(
    private http: HttpClient,
    private voteService: VoteService
  ) {
    this.updateColleagueList();
    this.voteService.newVoteObs.subscribe(() => this.updateColleagueList());
  }

  updateColleagueList() {
    this.http.get<Colleague[]>("https://dev.cleverapps.io/api/v2/colleagues").subscribe({
      next: data => {
        this.colleagueListSub.next(data)
      },
      error: () => {
        this.colleagueListSub.next([]);
      }
    });
  }

  vote(pseudo: string, likeHate: LikeHate) {
    this.voteService.newVote({pseudo: pseudo, like_hate: likeHate});
  }
}
