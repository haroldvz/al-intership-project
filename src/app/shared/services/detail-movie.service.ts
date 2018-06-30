import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { MovieDescriptor } from '../types/movies/detail-movie.type';
import { ApiService } from './api.service';
import { ResponseDescriptor } from '../types/movies/response.type';


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
    let args = '';
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
   * @param {string} url
   * @param {string} [args='']
   * @returns
   * @memberof MovieService
   */
  /*sendRequest(url: string, args: string = '', id_movie: number) {
    url += (id_movie + '?api_key=' + environment.api_key + args);
    return this._http.get(url).pipe(map(
      (data) => {
        return MovieDescriptor.import(data);
      }
    ));
  }*/

}
