import { Component, OnInit, Input, ViewChild, AfterContentInit } from '@angular/core';
import { CrewDescriptor } from '../../shared/types/movies/credits.type';
import { MatGridList } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-movie-crew',
  templateUrl: './movie-crew.component.html',
  styleUrls: ['./movie-crew.component.scss']
})
export class MovieCrewComponent implements OnInit, AfterContentInit {

  private gridByBreakpoint = {
    xl: 8,
    lg: 5,
    md: 4,
    sm: 3,
    xs: 1
  }

  @ViewChild('grid') grid: MatGridList;

  @Input() public data:CrewDescriptor = new CrewDescriptor();

  constructor(private observableMedia: ObservableMedia,
    public breakpointObserver: BreakpointObserver,
    public _mediaService: TdMediaService, ) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

}
