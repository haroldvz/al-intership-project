import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { ResponseDescriptor } from '../../shared/types/response.type';
import { MovieDescriptor } from '../../shared/types/movies/detail-movie.type';



@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  private routerSubscribe: any;
  public data: ResponseDescriptor = new ResponseDescriptor();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _movie_service: MovieService
  ) { }

  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      let category: string = params['category'];

      //request
      this._movie_service.getPopularMovies(1).subscribe(
        (data) => {
          this.data = data;
          //this.movies.push(data.results);
        }
      );
    });

  }

}
