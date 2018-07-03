import { Component, OnInit, Input } from '@angular/core';
import { TVSeriesDescriptor } from '../../shared/types/tv-series/detail-tv.type';

@Component({
  selector: 'app-tv-series-card',
  templateUrl: './tv-series-card.component.html',
  styleUrls: ['./tv-series-card.component.scss']
})
export class TvSeriesCardComponent implements OnInit {

  @Input() public data:TVSeriesDescriptor = new TVSeriesDescriptor();


  constructor() { }

  ngOnInit() {
  }

}
