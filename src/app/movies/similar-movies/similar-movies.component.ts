import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DetailMovieService } from '../../shared/services/detail-movie.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseDescriptor } from '../../shared/types/movies/response.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss']
})
export class SimilarMoviesComponent implements OnInit, OnDestroy {

  private routerSubscribe;
  subscription:Subscription;
  //@Input() public id_movie: number;
  data: ResponseDescriptor = new ResponseDescriptor();

  /**
   *Creates an instance of SimilarMoviesComponent.
   * @param {DetailMovieService} _detail_movie_service
   * @param {ActivatedRoute} route
   * @memberof SimilarMoviesComponent
   */
  constructor(private _detail_movie_service: DetailMovieService,
    private route: ActivatedRoute,
  ) { }

  /**
   *
   *
   * @memberof SimilarMoviesComponent
   */
  ngOnInit() {
    this.subscription = this.routerSubscribe = this.route.params.subscribe(params => {
      let id: number = params['id'];
      this._detail_movie_service.getSimilarMovies(id).subscribe(
        (data) => {
          this.data = data;
          //console.log(data);
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
   }


}
