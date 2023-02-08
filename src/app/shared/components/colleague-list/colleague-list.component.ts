import {Component, OnInit} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ColleagueService} from "../../../providers/colleague.service";
import {Observable} from "rxjs";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  colleagues$!: Observable<Colleague[]>;

  constructor(
    private colleagueService: ColleagueService
  ) {}

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.colleagues$ = this.colleagueService.list();
  }
}
