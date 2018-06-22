import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvSeriesRoutingModule } from './tv-series-routing.module';
import { ListSeriesComponent } from './list-series/list-series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieImagesComponent } from './serie-images/serie-images.component';
import { SerieVideosComponent } from './serie-videos/serie-videos.component';

@NgModule({
  imports: [
    CommonModule,
    TvSeriesRoutingModule
  ],
  declarations: [ListSeriesComponent, SerieDetailComponent, SerieImagesComponent, SerieVideosComponent]
})
export class TvSeriesModule { }
