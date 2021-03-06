import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SlideshowModule} from 'ng-simple-slideshow';
import { GallerySliderComponent } from './components/gallery-slider/gallery-slider.component';
import { HomeComponent } from './components/home/home.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SafePipe } from './pipes/sanitizer.pipe';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { ErrorComponent } from './components/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BarRatingModule,
    NgbModule,
    SlideshowModule,
    BrowserAnimationsModule,
    
  ],
  exports: [
    GallerySliderComponent,
    BrowserAnimationsModule,
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
    SafePipe,
    GetAgePipe,
    TruncatePipe,
    NgbModule,
    SlideshowModule,
    GallerySliderComponent,
    HomeComponent,
    MovieCardComponent,
    VideoCardComponent,
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
    GetAgePipe,
    SafePipe,
    HomeComponent,
    MovieCardComponent,
    VideoCardComponent,
    ErrorComponent,
  ],
  providers: [
    SearchService,
    
  ]
})
export class SharedModule { }
