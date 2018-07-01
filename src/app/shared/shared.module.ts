import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallerySliderComponent } from '../movies/gallery-slider/gallery-slider.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { MatCardModule, MatGridListModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTabsModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CovalentLoadingModule } from '@covalent/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    CovalentLoadingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports:[
    GallerySliderComponent,
    GalleryModule,
    LightboxModule, MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    CovalentLoadingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
  ],
  declarations: [GallerySliderComponent]
})
export class SharedModule { }
