import { Component, OnInit, Input } from '@angular/core';
import { CastDescriptor } from '../../shared/types/movies/credits.type';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss']
})
export class MovieCastComponent implements OnInit {

  @Input() public data:CastDescriptor = new CastDescriptor();

  constructor() { }

  ngOnInit() {
  }

}
