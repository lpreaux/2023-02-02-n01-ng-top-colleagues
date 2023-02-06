import { Injectable } from '@angular/core';

import {Colleague} from "../models/colleague";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }

  list(): Colleague[] {
    return [
      {
        pseudo: "jSmith",
        score: 50,
        photo: "https://randomuser.me/api/portraits/men/75.jpg"
      },
      {
        pseudo: "jDoe",
        score: 0,
        photo: "https://randomuser.me/api/portraits/men/76.jpg"
      },
      {
        pseudo: "mSmith",
        score: 1000,
        photo: "https://randomuser.me/api/portraits/women/75.jpg"
      },
      {
        pseudo: "jSparrow",
        score: -1000,
        photo: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      {
        pseudo: "jSmith",
        score: 50,
        photo: "https://randomuser.me/api/portraits/men/75.jpg"
      },
      {
        pseudo: "jDoe",
        score: 0,
        photo: "https://randomuser.me/api/portraits/men/76.jpg"
      },
      {
        pseudo: "mSmith",
        score: -1,
        photo: "https://randomuser.me/api/portraits/women/75.jpg"
      },
      {
        pseudo: "jSparrow",
        score: 5,
        photo: "https://randomuser.me/api/portraits/women/65.jpg"
      },{
        pseudo: "jSmith",
        score: 50,
        photo: "https://randomuser.me/api/portraits/men/75.jpg"
      },
      {
        pseudo: "jDoe",
        score: 0,
        photo: "https://randomuser.me/api/portraits/men/76.jpg"
      },
      {
        pseudo: "mSmith",
        score: -1,
        photo: "https://randomuser.me/api/portraits/women/75.jpg"
      },
      {
        pseudo: "jSparrow",
        score: 5,
        photo: "https://randomuser.me/api/portraits/women/65.jpg"
      }
    ];
  }
}
