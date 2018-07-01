import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallerySliderComponent } from '../movies/gallery-slider/gallery-slider.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedCovalentModule } from './shared-covalent.module';
import { SharedMaterialModule } from './shared-material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    FlexLayoutModule,
    SharedCovalentModule,
    SharedMaterialModule,
    AngularFontAwesomeModule
  ],
  exports: [
    GallerySliderComponent,
    GalleryModule,
    LightboxModule,
    FlexLayoutModule,
    SharedCovalentModule,
    SharedMaterialModule,
    AngularFontAwesomeModule
  ],
  declarations: [GallerySliderComponent]
})
export class SharedModule { }
