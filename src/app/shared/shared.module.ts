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

@NgModule({
  imports: [
    CommonModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    FlexLayoutModule,
    SharedCovalentModule,
    SharedMaterialModule,
    AngularFontAwesomeModule,
    RouterModule
  ],
  exports: [
    GallerySliderComponent,
    GalleryModule,
    LightboxModule,
    FlexLayoutModule,
    SharedCovalentModule,
    SharedMaterialModule,
    AngularFontAwesomeModule,
    MovieBackdropCardComponent
  ],
  entryComponents:[
    DialogOverviewBiographyComponent
  ],

  declarations: [GallerySliderComponent, DialogOverviewBiographyComponent,MovieBackdropCardComponent]
})
export class SharedModule { }
