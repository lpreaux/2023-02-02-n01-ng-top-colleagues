import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Colleague } from "../models/colleague";
import {ColleagueApi} from "../models/colleague-api";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  private readonly API_URL = 'https://dev.cleverapps.io/api/v2/colleagues';
  constructor(
    private http: HttpClient,
  ) { }

  list() {
    return this.http.get<Colleague[]>(this.API_URL);
  }

  post(colleague: ColleagueApi) {
    return this.http.post<Colleague>(this.API_URL, colleague);
  }
}
