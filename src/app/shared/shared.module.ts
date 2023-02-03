import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { VotingHistoryItemComponent } from './components/voting-history-item/voting-history-item.component';

import { ScorePipe } from './pipes/score.pipe';


@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    VotingHistoryItemComponent,
    ScorePipe,
  ],
  exports: [
    ColleagueListComponent,
    VotingHistoryItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [
    ScorePipe
  ]
})
export class SharedModule { }
