import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { ResponseDescriptor } from '../../shared/types/response.type';
import { TdMediaService, TdPagingBarComponent } from '@covalent/core';
import { TdLoadingService } from '@covalent/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  private routerSubscribe;
  public data: ResponseDescriptor = new ResponseDescriptor();
  animate;

  constructor(
    private route: ActivatedRoute,
    private _movie_service: MovieService,
    private _loadingService: TdLoadingService,
    public _mediaService: TdMediaService
  ) { }

  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      this.LoadingRegister();

      /*setTimeout(() => {
      
        this._movie_service.getPopularMovies(1).subscribe(
          (data) => {
            this.data = data;
            this.resolveLoading();
            //this.movies.push(data.results);
          }
        );
      }, 5000);*/

      let category: string = params['category'];
      this._movie_service.getPopularMovies(1).subscribe(
        (data) => {
          this.data = data;
          this.loadingResolve();
        }
      );

    });
  }

   /**
   *
   *
   * @memberof ListMoviesComponent
   */
  LoadingRegister(): void {
    this._loadingService.register('movie-detail');
  }

  /**
   *
   *
   * @memberof ListMoviesComponent
   */
  loadingResolve(): void {
    this._loadingService.resolve('movie-detail');
  }
}
