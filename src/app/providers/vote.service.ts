import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

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
}
