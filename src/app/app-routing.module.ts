import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {WelcomePage} from "./pages/welcome/welcome.page";
import {CreateColleaguePage} from "./pages/create-colleague/create-colleague.page";
import {ColleaguePage} from "./pages/colleague/colleague.page";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomePage},
  {
    path: 'colleague',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CreateColleaguePage
      },
      {
        path: ':pseudo',
        component: ColleaguePage
      }
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
