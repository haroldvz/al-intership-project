import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/internal/operators/map';
import { environment } from './../../../environments/environment';
import { ResponseDescriptor } from './../types/response.type';

@Injectable()
export class MovieService {

  url = environment.api_url + '/movie';

  /**
   * Creates an instance of MovieService.
   * @param {HttpClient} _http
   * @memberof MovieService
   */
  constructor(private _http: HttpClient) { }
  

  /**
   *
   *
   * @param {string} url
   * @param {string} [args='']
   * @returns
   * @memberof MovieService
   */
  sendRequest(url: string, args = ''){
    url += ('?api_key=' + environment.api_key + args);
    return this._http.get(url).pipe(map(
      (data) => {
        return ResponseDescriptor.import(data);
      }
    ));
  }


  /**
   * api endpoint: movies/get-top-rated-movies
   * @param {number} page
   * @returns
   * @memberof MovieService
   */
  getTopRatedMovies(page: number){
    const url = this.url + '/top_rated';
    const args = '&page=' + page + '&language=en-US';
    return this.sendRequest(url, args);
  }


  getPopularMovies(page: number){
    const url = this.url + '/popular';
    const args = '&page=' + page + '&language=en-US';
    return this.sendRequest(url, args);
  }

}
