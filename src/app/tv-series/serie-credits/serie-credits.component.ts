import { Component, OnInit, Input, ViewChild, AfterContentInit } from '@angular/core';
import { MatGridList } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-serie-credits',
  templateUrl: './serie-credits.component.html',
  styleUrls: ['./serie-credits.component.scss']
})
export class SerieCreditsComponent implements OnInit, AfterContentInit {

  gridByBreakpoint = {
    xl: 8,
    lg: 5,
    md: 4,
    sm: 3,
    xs: 1
  }
  @Input() public data;
  @ViewChild('grid') grid: MatGridList;


  /**
   *Creates an instance of SerieCreditsComponent.
   * @param {ObservableMedia} observableMedia
   * @param {BreakpointObserver} breakpointObserver
   * @param {TdMediaService} _mediaService
   * @memberof SerieCreditsComponent
   */
  constructor(private observableMedia: ObservableMedia,
    public breakpointObserver: BreakpointObserver,
    public _mediaService: TdMediaService, ) { }



  ngOnInit() {
  }

  /**
   *
   *
   * @memberof SerieCreditsComponent
   */
  ngAfterContentInit(): void {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

}
