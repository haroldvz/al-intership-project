import { Component, OnInit, Input } from '@angular/core';
import { CastDescriptor } from '../../shared/types/movies/credits.type';

@Component({
  selector: 'app-movie-cast-crew-card',
  templateUrl: './movie-cast-crew-card.component.html',
  styleUrls: ['./movie-cast-crew-card.component.scss']
})
export class MovieCastCrewCardComponent implements OnInit {

  @Input() public data;

  constructor() { }

  ngOnInit() {
  }

}
