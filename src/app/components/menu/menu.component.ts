import {Component, OnInit, Type} from '@angular/core';
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'tc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private readonly activeRoute: Observable<string | undefined>;
  constructor(route: ActivatedRoute) {
    this.activeRoute = route.title;
  }

  ngOnInit() {
    this.activeRoute.subscribe(title => console.log(title))
  }
}
