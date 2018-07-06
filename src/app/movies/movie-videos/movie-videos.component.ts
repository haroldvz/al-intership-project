
/**
 * MovieVideosComponent component class
 *
 * Class that set up the MovieVideosComponent component implementation
 * @author Harold Velez <harold.velez.zambrano@correounivalle.edu.co>
 *
 */

import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-videos',
  templateUrl: './movie-videos.component.html',
  styleUrls: ['./movie-videos.component.scss']
})
export class MovieVideosComponent implements OnInit {

  @Input() public data;

  base_video_url:string = environment.api_video_url;

  /**
   *Creates an instance of MovieVideosComponent.
   * @param {DomSanitizer} _sanitizer
   * @memberof MovieVideosComponent
   */
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  /**
   *
   *
   * @param {string} param
   * @returns
   * @memberof SerieVideosComponent
   */
  makeSafeVideoURL(param:string){
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.base_video_url + param);
  }

}
