import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from "./shared/shared.module";
import { WelcomeModule } from "./pages/welcome/welcome.module";

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";
import { AppRoutingModule } from './app-routing.module';
import {ColleagueModule} from "./pages/colleague/colleague.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    WelcomeModule,
    CreateColleagueModule,
    ColleagueModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
