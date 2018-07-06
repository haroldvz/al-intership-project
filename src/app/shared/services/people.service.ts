import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from './../../../environments/environment';
import { ApiService } from './api.service';
import { ResponsePeopleDescriptor } from '../types/person/response-person.type';


@Injectable()
export class PeopleService {

  url = environment.api_url + '/person';

  /**
   *Creates an instance of PeopleService.
   * @param {ApiService} _api_service
   * @memberof PeopleService
   */
  constructor(private _api_service: ApiService) { }

  /**
   * Get the list of popular people on TMDb. This list updates daily.
   *
   * @param {number} page
   * @returns
   * @memberof PeopleService
   */
  getPopularPeople(page: number) {
    let url = this.url + '/popular';
    let args = '&page=' + page;
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return ResponsePeopleDescriptor.import(data);
      }
    ));

  }


  


}
