import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import { SvgIcon } from "../models/svg-icon";
import svgIcons from "../data/svg-icons.data";

@Injectable({
  providedIn: 'root'
})
export class LocalMatIconsService {

  constructor(public iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    svgIcons.forEach(svgIcon => this.addSvgIcon(svgIcon));
  }

  private addSvgIcon(svgIcon: SvgIcon) {
    this.iconRegistry.addSvgIconLiteral(svgIcon.name, this.sanitizer.bypassSecurityTrustHtml(svgIcon.svg));
  }
}
