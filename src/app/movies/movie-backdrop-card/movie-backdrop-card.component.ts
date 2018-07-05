import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-movie-backdrop-card',
  templateUrl: './movie-backdrop-card.component.html',
  styleUrls: ['./movie-backdrop-card.component.scss']
})
export class MovieBackdropCardComponent implements OnInit {


  @Input() public data;

  constructor() { }

  ngOnInit() {
  }

}
