import { Component, OnInit, ViewChild } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatCardModule } from '@angular/material';
import { TdMediaService } from '@covalent/core';

// Load shared
import { TdLoadingService } from '@covalent/core';
import { ImagesMoviesDescriptor } from '../../shared/types/movies/images.type';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { DragScrollDirective } from 'ngx-drag-scroll';
import { ResponseDescriptor } from '../../shared/types/movies/response.type';

/**
 * Interface for data main slider
 *
 * @export
 * @interface ImageData
 */
export interface ImageData {
  image: string;
  id: number;
  title: string;
  vote_average: number;
  overview:string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;

  leftNavDisabled = false;
  rightNavDisabled = false;
  private routerSubscribe;
  images_data: ImagesMoviesDescriptor = new ImagesMoviesDescriptor();
  data: ResponseDescriptor = new ResponseDescriptor();
  data2: ResponseDescriptor = new ResponseDescriptor();
  backdrops_items_slider = [];
  backdrops_items = [];
  data_to_gallery_slider = {};
  slides: ImageData[] = []
  i = 0;

  /**
   *Creates an instance of HomeComponent.
   * @param {TdMediaService} media
   * @param {MatIconRegistry} _iconRegistry
   * @param {DomSanitizer} _domSanitizer
   * @param {MovieService} _movie_service
   * @param {ActivatedRoute} route
   * @memberof HomeComponent
   */
  constructor(
    public media: TdMediaService,
    //private _movie_service:MovieService,//movie service
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _movie_service: MovieService,
    private route: ActivatedRoute, ) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));

  }


  /**
   *
   *
   * @memberof HomeComponent
   */
  ngOnInit() {
    this._movie_service.getUpcomingMovies(1).subscribe(
      (data) => {
        this.data2 = data;
        //console.log(this.data);
        for (let i = 0; i < data.results.length; i++) {
          this.backdrops_items_slider.push({ file_path: data.results[i].backdrop_path })
          this.slides.push({
            image: data.results[i].backdrop_path,
            id: data.results[i].id,
            title: data.results[i].title,
            vote_average: data.results[i].vote_average,
            overview:data.results[i].overview
          });
        }
        this.data_to_gallery_slider['backdrops'] = this.backdrops_items_slider;


      }
    );

    this._movie_service.getTopRatedMovies(1).subscribe(
      (data) => {
        this.data = data;
        //console.log(this.data);
        /*for (let i = 0; i < data.results.length; i++) {
          this.backdrops_items.push({ file_path: data.results[i].backdrop_path })
        }
        this.data_to_gallery_slider['backdrops'] = this.backdrops_items;*/
      }
    );

  }


  /**
   *
   *
   * @returns {string}
   * @memberof HomeComponent
   */
  getSlide(): string {
    if (this.i > 19) {
      this.i = 0
    }
    return this.slides[this.i].image;

  }

  /**
   *
   *
   * @returns {number}
   * @memberof HomeComponent
   */
  getIdMovie(): number {
    if (this.i > 19) {
      this.i = 0
    }
    return this.slides[this.i].id;
  }

  /**
   *
   *
   * @returns {string}
   * @memberof HomeComponent
   */
  getTitleMovie(): string {
    if (this.i > 19) {
      this.i = 0
    }
    return this.slides[this.i].title;
  }

  /**
   *
   *
   * @returns {number}
   * @memberof HomeComponent
   */
  getVoteAverageMovie(): number {
    if (this.i > 19) {
      this.i = 0
    }
    return this.slides[this.i].vote_average;
  }

  /**
   *
   *
   * @returns {string}
   * @memberof HomeComponent
   */
  getOverviewMovie(): string {
    if (this.i > 19) {
      this.i = 0
    }
    return this.slides[this.i].overview;
  }

  /**
   *
   *
   * @memberof HomeComponent
   */
  getPrev() {
    this.i = this.i === 0 ? 19 : this.i - 1;
  }

  /**
   *
   *
   * @memberof HomeComponent
   */
  getNext() {
    this.i = this.i === this.slides.length ? this.i : this.i + 1;
  }


}

