import { Component, OnInit, Input } from '@angular/core';
import { CrewDescriptor } from '../../shared/types/movies/credits.type';

@Component({
  selector: 'app-movie-crew',
  templateUrl: './movie-crew.component.html',
  styleUrls: ['./movie-crew.component.scss']
})
export class MovieCrewComponent implements OnInit {

  @Input() public data:CrewDescriptor = new CrewDescriptor();

  

  constructor() { }

  ngOnInit() {
  }

}
