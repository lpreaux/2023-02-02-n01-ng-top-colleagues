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

  private colleagueSub: Subject<Colleague[]> = new Subject<Colleague[]>();

  get colleagueObs() {
    return this.colleagueSub.asObservable();
  }

  constructor(
    private http: HttpClient,
    private voteService: VoteService
  ) {
    this.http.get<Colleague[]>("https://dev.cleverapps.io/api/v2/colleagues").subscribe({
      next: data => {
        this.colleagueSub.next(data)
      },
      error: () => {
        this.colleagueSub.next([]);
      }
    });
  }

  vote(colleague: Colleague, likeHate: LikeHate) {
    this.voteService.newVote({colleague: colleague, vote: likeHate});
  }
}
