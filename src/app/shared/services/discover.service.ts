import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from './../../../environments/environment';
import { ResponseDescriptor } from './../types/movies/response.type';
import { ApiService } from './api.service';


@Injectable()
export class DiscoverService {

  url = environment.api_url + '/movie';

  /**
   *Creates an instance of DiscoverService.
   * @param {ApiService} _api_service
   * @memberof DiscoverService
   */
  constructor(private _api_service: ApiService) { }

  /**
   *
   * @param {number} page
   * @returns
   * @memberof DiscoverService
   */
  getTopRatedMovies(page: number) {
    let url = this.url + '/top_rated';
    let args = '&page=' + page;
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return ResponseDescriptor.import(data);
      }
    ));
  }



}
