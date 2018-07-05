import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallerySliderComponent } from '../movies/gallery-slider/gallery-slider.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedCovalentModule } from './shared-covalent.module';
import { SharedMaterialModule } from './shared-material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DialogOverviewBiographyComponent } from './layout/dialog-overview-biography/dialog-overview-biography.component';
import { MovieBackdropCardComponent } from '../movies/movie-backdrop-card/movie-backdrop-card.component';
import { RouterModule } from '@angular/router';
import { TvSeriesBackdropCardComponent } from './layout/tv-series-backdrop-card/tv-series-backdrop-card.component';
import { SearchComponent } from './layout/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
import { NgxGalleryModule } from 'ngx-gallery';
import { SliderComponent } from './layout/slider/slider.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AboutComponent } from './layout/about/about.component';
import { BarRatingModule } from "ngx-bar-rating";
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { DurationTimePipe } from './pipes/duration.pipe';
import { GetAgePipe } from './pipes/calculate-age.pipe';
import { TruncatePipe } from './pipes/limit-text.pipe';
@NgModule({
  imports: [
    CommonModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    FlexLayoutModule,
    SharedCovalentModule,
    SharedMaterialModule,
    AngularFontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    DragScrollModule,
    BarRatingModule
  ],
  exports: [
    GallerySliderComponent,
    GalleryModule,
    LightboxModule,
    FlexLayoutModule,
    SharedCovalentModule,
    SharedMaterialModule,
    AngularFontAwesomeModule,
    MovieBackdropCardComponent,
    TvSeriesBackdropCardComponent,
    SearchComponent,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    SliderComponent,
    DragScrollModule,
    BarRatingModule,
    ReviewsComponent,
    DurationTimePipe,
    GetAgePipe,
    TruncatePipe,
  ],
  entryComponents: [
    DialogOverviewBiographyComponent
  ],

  declarations: [
    GallerySliderComponent,
    DialogOverviewBiographyComponent,
    MovieBackdropCardComponent,
    TvSeriesBackdropCardComponent,
    SearchComponent,
    SliderComponent,
    AboutComponent,
    SearchPageComponent,
    ReviewsComponent,
    ReviewCardComponent,
    TruncatePipe,
    DurationTimePipe,
    GetAgePipe
  ],
  providers: [
    SearchService
  ]
})
export class SharedModule { }
