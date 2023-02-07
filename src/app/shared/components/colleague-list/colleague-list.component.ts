import {Component, OnDestroy} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnDestroy {

  colleagues: Colleague[] = [];
  private colleagueListSub;

  constructor(private colleagueService: ColleagueService) {
    this.colleagueListSub = this.colleagueService.colleagueListObs.subscribe(colleagues => this.colleagues = colleagues);
  }

  ngOnDestroy(): void {
    this.colleagueListSub.unsubscribe;
  }


}
