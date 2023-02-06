import { Component } from '@angular/core';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  likeCounter: number = 0;
  hateCounter: number = 0;

}
