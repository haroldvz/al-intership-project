import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { MovieDescriptor } from '../types/movies/detail-movie.type';


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
  constructor(private _http: HttpClient) { }


  /**
   *
   *
   * @param {string} url
   * @param {string} [args='']
   * @returns
   * @memberof MovieService
   */
  sendRequest(url: string, args:string = '',id_movie:number){
    url += (id_movie + '?api_key=' + environment.api_key + args);
    return this._http.get(url).pipe(map(
      (data) => {
        return MovieDescriptor.import(data);
      }
    ));
  }

}
