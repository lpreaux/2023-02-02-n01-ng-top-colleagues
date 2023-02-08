import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {Observable, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {VoteApi} from "../models/vote-api";
import {ColleagueApi} from "../models/colleague-api";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private readonly API_URL = 'https://dev.cleverapps.io/api/v2/votes';

  private subVote = new Subject<Vote>();
  get voteObs() {
    return this.subVote.asObservable();
  }

  constructor(
    private http: HttpClient,
  ) { }

  publishVote(vote: Vote) {
    this.subVote.next(vote);
  }

  list(): Observable<VoteApi[]> {
      return this.http.get<VoteApi[]>(this.API_URL);
  }

  post(vote: Vote) {
    return this.http.post<ColleagueApi>("https://dev.cleverapps.io/api/v2/votes", {
      pseudo: vote.pseudo, like_hate: vote.likeOrHate
    })
      .pipe(
        tap((colleague) => {
          this.publishVote({
            pseudo: colleague.pseudo, likeOrHate: vote.likeOrHate
          });
        })
      );
  }
}
