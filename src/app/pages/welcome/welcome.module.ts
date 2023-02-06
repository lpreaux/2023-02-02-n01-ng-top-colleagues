import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../../shared/shared.module";

import { WelcomePage } from './welcome.page';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    WelcomePage
  ],
  exports: [
    WelcomePage,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class WelcomeModule { }
