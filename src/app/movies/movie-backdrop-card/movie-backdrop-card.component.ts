import { Component, OnInit, Input } from '@angular/core';
import { MovieDescriptor } from '../../shared/types/movies/detail-movie.type';

@Component({
  selector: 'app-movie-backdrop-card',
  templateUrl: './movie-backdrop-card.component.html',
  styleUrls: ['./movie-backdrop-card.component.scss']
})
export class MovieBackdropCardComponent implements OnInit {

  
  @Input() public data: MovieDescriptor = new MovieDescriptor();

  constructor() { }

  ngOnInit() {
  }

}
