import { Component, OnInit, Input } from '@angular/core';
import { GalleryItem, ImageItem, GalleryRef, Gallery } from '@ngx-gallery/core';


//Used in person images (Person detail)
//from https://github.com/MurhafSousli/ngx-gallery

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss']
})
export class GallerySliderComponent implements OnInit {

  @Input() data;


  
  /**
   * Items  of gallery slider component
   */
  items: GalleryItem[];
  /**
   * Backdrops items of gallery slider component
   */
  backdrops_items = [];

  /**
   *Creates an instance of GallerySliderComponent.
   * 
   * @memberof GallerySliderComponent
   */
  constructor() { }


  /**
   *
   *
   * @memberof GallerySliderComponent
   */
  ngOnInit() {

    //for movies
    if (this.data.backdrops) {

      for (let i = 0; i < this.data.backdrops.length; i++) {
        this.backdrops_items.push({ srcUrl: 'https://image.tmdb.org/t/p/original' + this.data.backdrops[i].file_path, previewUrl: 'https://image.tmdb.org/t/p/w342' + this.data.backdrops[i].file_path, title: 'A' })
      }
      this.items = this.backdrops_items.map(item => new ImageItem(item.srcUrl, item.previewUrl));
    }

    //for people
    if (this.data.profiles) {
      for (let i = 0; i < this.data.profiles.length; i++) {
        this.backdrops_items.push({ srcUrl: 'https://image.tmdb.org/t/p/original' + this.data.profiles[i].file_path, previewUrl: 'https://image.tmdb.org/t/p/w342' + this.data.profiles[i].file_path })
      }
      this.items = this.backdrops_items.map(item => new ImageItem(item.srcUrl, item.previewUrl));
    }
  }

}
