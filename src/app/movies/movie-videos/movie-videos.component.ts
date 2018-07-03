import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-videos',
  templateUrl: './movie-videos.component.html',
  styleUrls: ['./movie-videos.component.scss']
})
export class MovieVideosComponent implements OnInit {

  @Input() public data;

  constructor() { }

  ngOnInit() {
  }

}
