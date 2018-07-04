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


  public gridByBreakpoint = {
    xl: 8,
    lg: 5,
    md: 4,
    sm: 3,
    xs: 1
  }


  @Input() public data;

  @ViewChild('grid') grid: MatGridList;


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
