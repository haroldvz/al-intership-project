import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() public data;


  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor() { }

  ngOnInit() {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];


    if (this.data.backdrops) {

      for (let i = 0; i < this.data.backdrops.length; i++) {
        this.galleryImages.push({ small: 'https://image.tmdb.org/t/p/w342' + this.data.backdrops[i].file_path, medium: 'https://image.tmdb.org/t/p/w500' + this.data.backdrops[i].file_path, big: 'https://image.tmdb.org/t/p/w500' + this.data.backdrops[i].file_path })
      }
    }


  }

}
