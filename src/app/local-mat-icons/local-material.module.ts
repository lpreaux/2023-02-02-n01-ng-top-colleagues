import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalMatIconsService } from "./services/local-mat-icons.service";

import { MatIconModule, MatIconRegistry } from "@angular/material/icon";


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [ MatIconModule ],
  providers: [
    MatIconRegistry,
    MatIconModule,
    LocalMatIconsService
  ]
})
export class LocalMaterialModule {
  constructor(private localMatIcons: LocalMatIconsService) {
  }
}
