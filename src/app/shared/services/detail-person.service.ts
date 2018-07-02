import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { MovieDescriptor } from '../types/movies/detail-movie.type';
import { ApiService } from './api.service';
import { PersonDescriptor } from '../types/person/detail-person.type';
import { CreditsPersonDescriptor } from '../types/person/credits-person.type';



@Injectable({
  providedIn: 'root'
})
export class DetailPersonService {

  url = environment.api_url + '/person/';

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
   * @param {number} id_person
   * @returns
   * @memberof DetailPersonService
   */
  getPersonDetail(id_person: number) {
    let url = this.url + id_person;
    let args = '';
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return PersonDescriptor.import(data);
      }
    ));
  }


  /**
   *
   *
   * @param {number} id_person
   * @returns
   * @memberof DetailPersonService
   */
  getPersonCredits(id_person: number) {
    let url = this.url + id_person + '/movie_credits';
    let args = '';
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return CreditsPersonDescriptor.import(data);
      }
    ));
  }


}
