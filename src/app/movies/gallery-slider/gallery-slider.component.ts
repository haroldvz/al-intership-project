import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Observable } from 'rxjs';
import { ImagesMoviesDescriptor } from '../../shared/types/movies/images.type';


@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss']
})
export class GallerySliderComponent implements OnInit {

  @Input() public data: ImagesMoviesDescriptor = new ImagesMoviesDescriptor();

  items: GalleryItem[];

  backdrops_items = [];

  images$: Observable<GalleryItem[]>;

  constructor() { }

  ngOnInit() {


    for (let i = 0; i < this.data.backdrops.length; i++) {
      this.backdrops_items.push({ srcUrl: 'https://image.tmdb.org/t/p/original' + this.data.backdrops[i].file_path, previewUrl: 'https://image.tmdb.org/t/p/w342' + this.data.backdrops[i].file_path })
    }

    this.items = this.backdrops_items.map(item => new ImageItem(item.srcUrl, item.previewUrl));

  }


}
