import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serie-credits-card',
  templateUrl: './serie-credits-card.component.html',
  styleUrls: ['./serie-credits-card.component.scss']
})
export class SerieCreditsCardComponent implements OnInit {

  @Input() public data;

  constructor() { }

  ngOnInit() {
  }

}
