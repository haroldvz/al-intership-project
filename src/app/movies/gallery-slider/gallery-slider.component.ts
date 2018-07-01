import { Component, OnInit, Input } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss']
})
export class GallerySliderComponent implements OnInit {

  @Input() public data;

  items: GalleryItem[];

  constructor() { }

  ngOnInit() {
    this.items = this.data.map(item => new ImageItem(item.srcUrl, item.previewUrl));
  }

}
