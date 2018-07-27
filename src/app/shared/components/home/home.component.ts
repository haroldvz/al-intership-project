
/**
 * Homes's component class
 *
 * Class that set up the home's component implementation
 * @author Harold Velez <harold.velez.zambrano@correounivalle.edu.co>
 *
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MovieService } from './../../services/movie.service';
import { DragScrollDirective } from 'ngx-drag-scroll';
import { ResponseDescriptor } from './../../types/movies/response.type';

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
  overview: string;
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
  
  data: ResponseDescriptor = new ResponseDescriptor();
  upcoming_movies: ResponseDescriptor = new ResponseDescriptor();
 
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
    private _movie_service: MovieService,) {

  }


  /**
   *
   *
   * @memberof HomeComponent
   */
  ngOnInit() {
    this._movie_service.getUpcomingMovies(1).subscribe(
      (data) => {
        this.upcoming_movies = data;
   
        for (let i = 0; i < data.results.length; i++) {
          this.slides.push({
            image: data.results[i].backdrop_path,
            id: data.results[i].id,
            title: data.results[i].title,
            vote_average: data.results[i].vote_average,
            overview: data.results[i].overview
          });
        }
      }
    );

    this._movie_service.getTopRatedMovies(1).subscribe(
      (data) => {
        this.data = data;
      }
    );

  }


  /**
   * Move to left the dragScroll movies carousel
   *
   * @memberof HomeComponent
   */
  moveLeft() {
    this.ds.moveLeft();
  }


  /**
   * Get the image interface attribute (the image url)
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
   * Get the movie id attribute
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
   * Get the title of the movie
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
   * Get the vote average
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
   * Get the movie overview 
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
   * Go to prev image slider
   *
   * @memberof HomeComponent
   */
  getPrev() {
    this.i = this.i === 0 ? 19 : this.i - 1;
  }

  /**
   * Go to next image slider
   *
   * @memberof HomeComponent
   */
  getNext() {
    this.i = this.i === this.slides.length ? this.i : this.i + 1;
  }


}


