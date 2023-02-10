import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColleaguePage} from "./colleague.page";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [ ColleaguePage ],
  exports: [ ColleaguePage ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ColleagueModule {}
