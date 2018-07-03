import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvSeriesRoutingModule } from './tv-series-routing.module';
import { ListSeriesComponent } from './list-series/list-series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieImagesComponent } from './serie-images/serie-images.component';
import { SerieVideosComponent } from './serie-videos/serie-videos.component';
import { TVSerieService } from '../shared/services/tv-series.service';
import { SharedModule } from '../shared/shared.module';
import { TvSeriesCardComponent } from './tv-series-card/tv-series-card.component';

@NgModule({
  imports: [
    CommonModule,
    TvSeriesRoutingModule,
    SharedModule
  ],
  declarations: [
    ListSeriesComponent, 
    SerieDetailComponent, 
    SerieImagesComponent, 
    SerieVideosComponent, TvSeriesCardComponent],
  providers:[
    TVSerieService
  ]
})
export class TvSeriesModule { }
