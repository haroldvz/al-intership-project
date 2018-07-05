import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tv-series-backdrop-card',
  templateUrl: './tv-series-backdrop-card.component.html',
  styleUrls: ['./tv-series-backdrop-card.component.scss']
})
export class TvSeriesBackdropCardComponent implements OnInit {

  @Input() public data;

  constructor() { }

  ngOnInit() {
  }

}
