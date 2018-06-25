import { Component, OnInit, Input } from '@angular/core';
import { MovieDescriptor } from '../../shared/types/movies/detail-movie.type';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() public data:MovieDescriptor = new MovieDescriptor();

  constructor() { }

  ngOnInit() {
  }

}
