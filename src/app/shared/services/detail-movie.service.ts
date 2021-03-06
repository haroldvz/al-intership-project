import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { MovieDescriptor } from '../types/movies/detail-movie.type';
import { ApiService } from './api.service';
import { ResponseDescriptor } from '../types/movies/response.type';
import { ImagesMoviesDescriptor } from '../types/movies/images.type';


@Injectable({
  providedIn: 'root'
})
export class DetailMovieService {

  url = environment.api_url + '/movie/';

  /**
   *Creates an instance of DetailMovieService.
   * @param {HttpClient} _http
   * @memberof DetailMovieService
   */
  constructor(private _api_service: ApiService) { }



  /**
   * Get the primary information about a movie.
   *
   * @param {number} id_movie
   * @returns
   * @memberof DetailMovieService
   */
  getMovieDetail(id_movie: number) {
    let url = this.url + id_movie;
    let args = '&append_to_response=videos,reviews';
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        //console.log('Movie detail',data);
        return MovieDescriptor.import(data);
      }
    ));
  }


  /**
   * Get a list of similar movies. 
   * This is not the same as the "Recommendation" system you see on the website.
   * These items are assembled by looking at keywords and genres.
   * @param {number} id_movie
   * @returns
   * @memberof DetailMovieService
   */
  getSimilarMovies(id_movie: number) {
    let url = this.url + id_movie + '/similar';
    let args = '';
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return ResponseDescriptor.import(data);
      }
    ));
  }


  /**
   * Get the images that belong to a movie.
   *
   * @param {number} id_movie
   * @returns
   * @memberof DetailMovieService
   */
  getMovieImages(id_movie:number){
    let url = this.url + id_movie + '/images';
    let args = '';
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        console.log('movie images',data);
        return ImagesMoviesDescriptor.import(data);
      }
    ));
  }




}
