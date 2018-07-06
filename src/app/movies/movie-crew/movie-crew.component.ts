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

  /**
   *Object with the numbers of columns depends the screen size,
   * used for mat list grid
   *
   * @memberof MovieCrewComponent
   */
  gridByBreakpoint = {
    xl: 8,
    lg: 5,
    md: 4,
    sm: 3,
    xs: 1
  }

  @ViewChild('grid') grid: MatGridList;

  @Input() public data:CrewDescriptor = new CrewDescriptor();

  /**
   *Creates an instance of MovieCrewComponent.
   * @param {ObservableMedia} observableMedia
   * @param {BreakpointObserver} breakpointObserver
   * @param {TdMediaService} _mediaService
   * @memberof MovieCrewComponent
   */
  constructor(private observableMedia: ObservableMedia,
    public breakpointObserver: BreakpointObserver,
    public _mediaService: TdMediaService, ) { }

  ngOnInit() {
  }

  /**
   * Detect the breakpoint and set the apropiate columns to the mat-grid-list
   *
   * @memberof MovieCrewComponent
   */
  ngAfterContentInit(): void {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

}
