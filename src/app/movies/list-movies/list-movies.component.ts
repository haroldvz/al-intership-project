
/**
 * List movie's component class
 *
 * Class that set up the List movie's component implementation
 * @author Harold Velez <harold.velez.zambrano@correounivalle.edu.co>
 *
 */

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { ResponseDescriptor } from '../../shared/types/movies/response.type';
import { TdMediaService, TdPagingBarComponent, IPageChangeEvent } from '@covalent/core';
import { TdLoadingService } from '@covalent/core';
import { Helpers } from '../../shared/utils/helpers';

/**
 * Component
 */
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent extends Helpers implements OnInit, OnDestroy {
  
  /**
   * on destroy
   */
  ngOnDestroy(): void {
    
  }

  /**
   * Total results of list movies component
   */
  total_results: number;
  /**
   * Actual page of list movies component
   */
  _actual_page: number;
  /**
   * Actual category of list movies component
   */
  _actual_category: string;
  /**
   * Total pages of list movies component
   */
  _total_pages: number;
  /**
   * Data  of list movies component
   * This data represents the movies response (ResponseDescritor)
   */
  data: ResponseDescriptor = new ResponseDescriptor();

  /**
   * View child of list movies component
   */
  @ViewChild('pagingMoviesBar') _pagingMoviesBar: TdPagingBarComponent;

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
    public route: ActivatedRoute,
    private _movie_service: MovieService,
    private _loadingService: TdLoadingService,
    public _mediaService: TdMediaService,
    private _router: Router,//try change to private and test it
  ) { super(); }

  /**
   * 
   *
   * @memberof ListMoviesComponent
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
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
   * Gets _pagingMoviesBar
   */
  get pagingMoviesBar():TdPagingBarComponent{
    return this._pagingMoviesBar;
  }
  
  /**
   * Gets _router
   */
  get router():Router{
    return this._router;
  }


  /**
   * Get the movies list depends of this._actual_category (url param)
   * cases: popular, top-rated, now-playing, upcoming (latest breaks with api)
   * @memberof ListMoviesComponent
   */
  getMovies() {
    this.pagingMoviesBar.navigateToPage(this._actual_page);
    switch (this._actual_category) {
      case 'popular': {
        this._movie_service.getPopularMovies(this._actual_page).subscribe(
          (data) => {
            this.data = data;
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
        this._actual_category = 'popular';
        this._actual_page = 1;
        this.getMovies();//calls again with new data
      } break;
    }

  }


  /**
   * Listen the change of filter and navigate to teh correspond route and page 1 (reset the filter)
   * 
   * @param {*} event
   * @memberof ListMoviesComponent
   */
  /*changeFilter(event: any) {
    this._actual_category = event.value;
    this._actual_page = 1;//go to page 1 in the new list
    this.pagingMoviesBar.navigateToPage(1);//this navigates to specific valid page
    this._router.navigate(['/movies/', this._actual_category, { 'page': this._actual_page }]);
  }*/


  /**
   * Listen the page change and navigate to the corresponding route
   *
   * @param {IPageChangeEvent} event
   * @memberof ListMoviesComponent
   */
  changeOfPage(event: IPageChangeEvent): void {
    this._actual_page = event.page;
    this._router.navigate(['/movies/', this._actual_category, { 'page': this._actual_page }]);
  }

  /**
  * Register the loading widget
  *
  * @memberof ListMoviesComponent
  */
  LoadingRegister(): void {
    this._loadingService.register('list-movies');
  }

  /**
   * Resolve the loading widget
   *
   * @memberof ListMoviesComponent
   */
  loadingResolve(): void {
    this._loadingService.resolve('list-movies');
  }
}
