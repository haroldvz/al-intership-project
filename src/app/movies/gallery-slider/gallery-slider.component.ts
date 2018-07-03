import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GalleryItem, ImageItem, GalleryRef, Gallery } from '@ngx-gallery/core';
import { Observable } from 'rxjs';
import { ImagesMoviesDescriptor } from '../../shared/types/movies/images.type';
import { Lightbox } from '@ngx-gallery/lightbox';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss']
})
export class GallerySliderComponent implements OnInit {

  @Input() public data;

  galleryId = 'ex2';

  items: GalleryItem[];

  backdrops_items = [];


  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  

  images$: Observable<GalleryItem[]>;

  constructor(private gallery: Gallery) { }

  

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

  /*this.galleryImages = [
      {
          small: 'assets/1-small.jpg',
          medium: 'assets/1-medium.jpg',
          big: 'assets/1-big.jpg'
      },
      {
          small: 'assets/2-small.jpg',
          medium: 'assets/2-medium.jpg',
          big: 'assets/2-big.jpg'
      },
      {
          small: 'assets/3-small.jpg',
          medium: 'assets/3-medium.jpg',
          big: 'assets/3-big.jpg'
      }
  ];*/

    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);


    if (this.data.backdrops) {

      for (let i = 0; i < this.data.backdrops.length; i++) {
        this.backdrops_items.push({ srcUrl: 'https://image.tmdb.org/t/p/original' + this.data.backdrops[i].file_path, previewUrl: 'https://image.tmdb.org/t/p/w342' + this.data.backdrops[i].file_path, title: 'A' })
        this.galleryImages.push({small:'https://image.tmdb.org/t/p/w342' + this.data.backdrops[i].file_path,medium:'https://image.tmdb.org/t/p/w500' + this.data.backdrops[i].file_path, big:'https://image.tmdb.org/t/p/w500' + this.data.backdrops[i].file_path})
      }
      this.items = this.backdrops_items.map(item => new ImageItem(item.srcUrl, item.previewUrl));
    }

    if (this.data.profiles) {

      for (let i = 0; i < this.data.profiles.length; i++) {
        this.backdrops_items.push({ srcUrl: 'https://image.tmdb.org/t/p/original' + this.data.profiles[i].file_path, previewUrl: 'https://image.tmdb.org/t/p/w342' + this.data.profiles[i].file_path })
      }
      this.items = this.backdrops_items.map(item => new ImageItem(item.srcUrl, item.previewUrl));
    }



  }


}
