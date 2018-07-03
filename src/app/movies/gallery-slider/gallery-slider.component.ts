import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GalleryItem, ImageItem, GalleryRef, Gallery } from '@ngx-gallery/core';
import { Observable } from 'rxjs';
import { ImagesMoviesDescriptor } from '../../shared/types/movies/images.type';
import { Lightbox } from '@ngx-gallery/lightbox';

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

  images$: Observable<GalleryItem[]>;

  constructor(private gallery: Gallery) { }

  ngOnInit() {

    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);


    if (this.data.backdrops) {

      for (let i = 0; i < this.data.backdrops.length; i++) {
        this.backdrops_items.push({ srcUrl: 'https://image.tmdb.org/t/p/original' + this.data.backdrops[i].file_path, previewUrl: 'https://image.tmdb.org/t/p/w342' + this.data.backdrops[i].file_path, title: 'A' })
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
