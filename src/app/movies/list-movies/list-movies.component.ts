import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { ResponseDescriptor } from '../../shared/types/response.type';
import { MovieDescriptor } from '../../shared/types/movies/detail-movie.type';
import { trigger, animate, style, group, state, animateChild, query, stagger, transition, keyframes } from '@angular/animations';
import { TdMediaService, TdPagingBarComponent } from '@covalent/core';
import { TdLoadingService } from '@covalent/core';

@Component({
  selector: 'app-list-movies',
  /*animations:[
    
    trigger(
    'query', [
      transition(
        '* => start', [
          query('.item', [style({
            opacity: 0
          }), animate('2s', style({
            opacity: 1
          }))], {
            limit: -3
          }),
        ]),
    ]),],*/
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  private routerSubscribe: any;
  public data: ResponseDescriptor = new ResponseDescriptor();
  animate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _movie_service: MovieService,
    private _loadingService: TdLoadingService,
    public _mediaService: TdMediaService
  ) { }

  ngOnInit() {
    
    this.routerSubscribe = this.route.params.subscribe(params => {
      
      this.registerLoading();

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
      //request
      this._movie_service.getPopularMovies(1).subscribe(
        (data) => {
          this.data = data;
          this.resolveLoading();
          //this.movies.push(data.results);
        }
      );
      
    });

   

  }

  //Loading
  registerLoading(): void {
    this._loadingService.register('list-movies');
  }

  resolveLoading(): void {
    this._loadingService.resolve('list-movies');
  }

}
