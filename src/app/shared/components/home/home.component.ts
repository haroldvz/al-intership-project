
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
import { ResponseDescriptor } from './../../types/movies/response.type';
import { IImage } from 'ng-simple-slideshow';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit{
  
  /**
   * Data  of home component, (in this case, data will be top-rated movies)
   */
  data: ResponseDescriptor = new ResponseDescriptor();
  /**
   * Upcoming movies of home component
   */
  upcoming_movies: ResponseDescriptor = new ResponseDescriptor();
  /**
   * Image urls of home component
   */
  imageUrls: IImage[] = [];

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
    private _movie_service: MovieService,
    private _router: Router, ) {

  }


  /**
   *
   *
   * @memberof HomeComponent
   */
  ngOnInit() {

    //Get upcoming movies
    this._movie_service.getUpcomingMovies(1).subscribe(
      (data) => {
        this.upcoming_movies = data;

        for (let i = 0; i < this.upcoming_movies.results.length; i++) {
          let item_data = {
            url: 'https://image.tmdb.org/t/p/w1280' + data.results[i].backdrop_path,
            title: this.upcoming_movies.results[i].title,
            caption: this.upcoming_movies.results[i].title,
            clickAction: ()=> this._router.navigate(['/movie/',  this.upcoming_movies.results[i].id ])
          }
          this.imageUrls.push(item_data)
        }
      }
    );

    //Get top-rated movies
    this._movie_service.getTopRatedMovies(1).subscribe(
      (data) => {
        this.data = data;
      }
    );

  }

}


