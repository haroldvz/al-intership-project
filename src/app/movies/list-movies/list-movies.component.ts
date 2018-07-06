
/**
 * List movie's component class
 *
 * Class that set up the List movie's component implementation
 * @author Harold Velez <harold.velez.zambrano@correounivalle.edu.co>
 *
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { ResponseDescriptor } from '../../shared/types/movies/response.type';
import { TdMediaService, TdPagingBarComponent, IPageChangeEvent } from '@covalent/core';
import { TdLoadingService } from '@covalent/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  routerSubscribe;
  total_results: number;
  _actual_page: number;
  _actual_category: string;
  _total_pages: number;
  data: ResponseDescriptor = new ResponseDescriptor();
  animate;

  @ViewChild('pagingMoviesBar') pagingMoviesBar: TdPagingBarComponent;

  /**
   *Creates an instance of ListMoviesComponent.
   * @param {ActivatedRoute} route
   * @param {MovieService} _movie_service
   * @param {TdLoadingService} _loadingService
   * @param {TdMediaService} _mediaService
   * @param {Router} _router
   * @memberof ListMoviesComponent
   */
  constructor(
    private route: ActivatedRoute,
    private _movie_service: MovieService,
    private _loadingService: TdLoadingService,
    public _mediaService: TdMediaService,
    private _router: Router,
  ) { }

  /**
   * 
   *
   * @memberof ListMoviesComponent
   */
  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      this.LoadingRegister();
      let category: string = params['category'];
      if (params['page']) {
        let page: number = +params['page'];
        this._actual_page = page;
      } else {
        this._actual_page = 1;//default value
      }
      this._actual_category = category;
      this.getMovies();
    });
  }


  /**
   * Get the movies list depends of this._actual_category (url param)
   * cases: popular, top-rated, now-playing, upcoming (latest breaks with api)
   * @memberof ListMoviesComponent
   */
  getMovies() {
    switch (this._actual_category) {
      case 'popular': {
        this._movie_service.getPopularMovies(this._actual_page).subscribe(
          (data) => {
            this.data = data;
            console.log(data)
            this.total_results = data.total_results;
            this._total_pages = data.total_pages;
            this.loadingResolve();
          }
        );
      } break;
      case 'top-rated': {
        this._movie_service.getTopRatedMovies(this._actual_page).subscribe(
          (data) => {
            this.data = data;
            this.total_results = data.total_results;
            this._total_pages = data.total_pages;
            this.loadingResolve();
          }
        );
      } break;
      case 'now-playing': {
        this._movie_service.getNowPlayingMovies(this._actual_page).subscribe(
          (data) => {
            this.data = data;
            this.total_results = data.total_results;
            this._total_pages = data.total_pages;
            this.loadingResolve();
          }
        );
      } break;
      case 'latest': {
        this._movie_service.getLatestMovies(this._actual_page).subscribe(
          (data) => {
            this.data = data;
            this.total_results = data.total_results;
            this._total_pages = data.total_pages;
            this.loadingResolve();
          }
        );
      } break;
      case 'upcoming': {
        this._movie_service.getUpcomingMovies(this._actual_page).subscribe(
          (data) => {
            this.data = data;
            this.total_results = data.total_results;
            this._total_pages = data.total_pages;
            this.loadingResolve();
          }
        );

      } break;
      default: {
        this._router.navigate(['/404-not-found/']);
      } break;
    }

  }


  /**
   * Listen the change of filter and navigate to teh correspond route and page 1 (reset the filter)
   * 
   * @param {*} event
   * @memberof ListMoviesComponent
   */
  changeFilter(event: any) {
    //console.log(event.value);
    this._actual_category = event.value;
    this._actual_page = 1;//go to page 1 in the new list
    this.pagingMoviesBar.navigateToPage(1);
    this._router.navigate(['/movies/', this._actual_category, { 'page': this._actual_page }]);
  }


  /**
   * Listen the page change and navigate to the corresponding route
   *
   * @param {IPageChangeEvent} event
   * @memberof ListMoviesComponent
   */
  changeOfPage(event: IPageChangeEvent): void {

    this._actual_page = event.page;
    //console.log(this._actual_page);
    window.scroll(0, 0);
    document.body.scrollTop = 0;
    document.querySelector('body').scrollTo(0, 0);
    this._router.navigate(['/movies/', this._actual_category, { 'page': this._actual_page }]);

  }

  /**
  * Register the loading widget
  *
  * @memberof ListMoviesComponent
  */
  LoadingRegister(): void {
    this._loadingService.register('movie-detail');
  }

  /**
   * Resolve the loading widget
   *
   * @memberof ListMoviesComponent
   */
  loadingResolve(): void {
    this._loadingService.resolve('movie-detail');
  }
}
