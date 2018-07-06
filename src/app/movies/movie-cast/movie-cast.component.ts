import { Component, OnInit, Input, ViewChild, AfterContentInit } from '@angular/core';
import { CastDescriptor } from '../../shared/types/movies/credits.type';
import { MatGridList } from '@angular/material';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { TdMediaService } from '@covalent/core';


@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss']
})
export class MovieCastComponent implements OnInit, AfterContentInit {

  /**
   * Object with the numbers of columns depends the screen size,
   * used for mat list grid
   *
   * @memberof MovieCastComponent
   */
  gridByBreakpoint = {
    xl: 8,
    lg: 5,
    md: 4,
    sm: 3,
    xs: 1
  }


  @Input() public data: CastDescriptor = new CastDescriptor();

  @ViewChild('grid') grid: MatGridList;

  /**
   *Creates an instance of MovieCastComponent.
   * @param {ObservableMedia} observableMedia
   * @param {BreakpointObserver} breakpointObserver
   * @param {TdMediaService} _mediaService
   * @memberof MovieCastComponent
   */
  constructor(private observableMedia: ObservableMedia,
    public breakpointObserver: BreakpointObserver,
    public _mediaService: TdMediaService, ) { }

  ngOnInit() {
  }

  /**
   *
   *
   * @memberof MovieCastComponent
   */
  ngAfterContentInit(): void {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }


}
