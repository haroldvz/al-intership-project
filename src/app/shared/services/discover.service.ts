import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from './../../../environments/environment';
import { ResponseDescriptor } from './../types/movies/response.type';
import { ApiService } from './api.service';


@Injectable()
export class DiscoverService {

  url = environment.api_url + '/discover';

  /**
   *Creates an instance of DiscoverService.
   * @param {ApiService} _api_service
   * @memberof DiscoverService
   */
  constructor(private _api_service: ApiService) { }

  /**
   * Discover movies by different types of data like average rating, 
   * number of votes, genres and certifications.
   * Some examples of what can be done with discover can be found in https://www.themoviedb.org/documentation/api/discover
   * @param {number} page
   * @param {string} params
   * @returns
   * @memberof DiscoverService
   */
  discoverMovies(page: number,params:string) {
    let url = this.url + '/movie';
    let args = '&page=' + page + params;
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return ResponseDescriptor.import(data);
      }
    ));
  }



}
