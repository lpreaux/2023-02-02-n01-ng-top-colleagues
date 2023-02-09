import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

import { LocalMaterialModule } from "../local-mat-icons/local-material.module";

import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { VotingHistoryItemComponent } from './components/voting-history-item/voting-history-item.component';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';
import { CounterComponent } from './components/counter/counter.component';

import { ScorePipe } from './pipes/score.pipe';
import { CreateColleagueFormsComponent } from './components/create-colleague-forms/create-colleague-forms.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { FirstLastValidatorDirective } from './validators/first-last-validator.directive';
import { PseudoValidatorDirective } from './validators/pseudo-validator.directive';


@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    VotingHistoryItemComponent,
    VotingHistoryComponent,
    ScorePipe,
    CounterComponent,
    CreateColleagueFormsComponent,
    FirstLastValidatorDirective,
    PseudoValidatorDirective
  ],
  exports: [
    ColleagueListComponent,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueFormsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    LocalMaterialModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [
    ScorePipe
  ]
})
export class SharedModule { }
