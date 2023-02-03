import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import {MatButtonModule} from "@angular/material/button";
import { ColleagueComponent } from './components/colleague/colleague.component';
import {MatCardModule} from "@angular/material/card";
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import { ScorePipe } from './pipes/score.pipe';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe
  ],
    exports: [
        LikeHateComponent,
        ColleagueComponent,
        ColleagueListComponent
    ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class SharedModule { }
