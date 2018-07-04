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
  constructor(private _http: HttpClient,
    private _api_service: ApiService) { }



  /**
   *
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
        return MovieDescriptor.import(data);
      }
    ));
  }


  /**
   *
   *
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
   *
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
        return ImagesMoviesDescriptor.import(data);
      }
    ));
  }




}
