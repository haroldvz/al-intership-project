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

  private gridByBreakpoint = {
    xl: 8,
    lg: 5,
    md: 4,
    sm: 3,
    xs: 1
  }


  @Input() public data: CastDescriptor = new CastDescriptor();

  @ViewChild('grid') grid: MatGridList;

  constructor(private observableMedia: ObservableMedia,
    public breakpointObserver: BreakpointObserver,
    public _mediaService: TdMediaService, ) { }

  ngOnInit() {

    /*this.breakpointObserver
    .observe(['(min-width: 362px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.grid.cols = 2;
      } else {
        //this.grid.cols = 1;
        this.grid.cols = 1;
      }
    });*/

  }

  ngAfterContentInit(): void {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }


}
