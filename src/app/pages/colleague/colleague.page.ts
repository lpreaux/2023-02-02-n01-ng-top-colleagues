import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ColleagueApi} from "../../models/colleague-api";
import {ColleagueService} from "../../providers/colleague.service";
import {Observable} from "rxjs";

@Component({
  selector: 'tc-colleague-page',
  templateUrl: './colleague.page.html',
  styleUrls: ['./colleague.page.scss']
})
export class ColleaguePage implements OnInit {
  private _colleague$!: Observable<ColleagueApi>;
  get colleague$(): Observable<ColleagueApi> {
    return this._colleague$;
  }

  constructor(
    private route: ActivatedRoute,
    private colleagueService: ColleagueService
  ) {
    const pseudo = route.snapshot.paramMap.get("pseudo");
    if (pseudo) this.setColleague(pseudo);
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => {
          const pseudo = params.get('pseudo');
          if (pseudo) this.setColleague(pseudo);
        }
      );
  }

  setColleague(pseudo: string){
    this._colleague$ = this.colleagueService.getByPseudo(pseudo);
  }
}
