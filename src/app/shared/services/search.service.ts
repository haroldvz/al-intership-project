import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from './../../../environments/environment';
import { ApiService } from './api.service';
import { ResponseSearchDescriptor } from '../types/search/search-response.type';



@Injectable()
export class SearchService {

  url = environment.api_url + '/search';

  /**
   *Creates an instance of PeopleService.
   * @param {ApiService} _api_service
   * @memberof SearchService
   */
  constructor(private _api_service: ApiService) { }

 /**
  *
  *
  * @param {number} page
  * @param {string} query
  * @returns
  * @memberof SearchService
  */
  multiSearch(page: number, query:string) {
    let url = this.url + '/multi';
    let args = '&query=' + query + '&page=' + page;
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return ResponseSearchDescriptor.import(data);
      }
  ));

  }


  


}
