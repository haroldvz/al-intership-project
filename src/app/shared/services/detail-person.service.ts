import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { MovieDescriptor } from '../types/movies/detail-movie.type';
import { ApiService } from './api.service';
import { PersonDescriptor } from '../types/person/detail-person.type';
import { CreditsPersonDescriptor } from '../types/person/credits-person.type';
import { CreditsTVPersonDescriptor } from '../types/person/tv-series-person.type';
import { ImagesMoviesDescriptor } from '../types/movies/images.type';
import { ImagesPersonDescriptor } from '../types/person/images-person.type';
import { Observable } from 'rxjs';



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
   * Get the primary person details by id.
   *
   * @param {number} id_person
   * @returns
   * @memberof DetailPersonService
   */
  getPersonDetail(id_person: number):Observable<PersonDescriptor> {
    let url = this.url + id_person;
    let args = '';
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        console.log('Person detail',data);
        return PersonDescriptor.import(data);
      }
    ));
  }


  /**
   * Get the movie credits for a person.
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
        console.log('Person credits',data);
        return CreditsPersonDescriptor.import(data);
      }
    ));
  }

  /**
   * Get the tv credits for a person.
   * 
   * @param {number} id_person
   * @returns
   * @memberof DetailPersonService
   */
  getPersonTVCredits(id_person: number) {
    let url = this.url + id_person + '/tv_credits';
    let args = '';
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        console.log('Person tv credits',data);
        return CreditsTVPersonDescriptor.import(data);
      }
    ));
  }


   /**
   * Get the images for a person.
   *
   * @param {number} id_person
   * @returns
   * @memberof DetailPersonService
   */
  getPersonImages(id_person: number) {
    let url = this.url + id_person + '/images';
    let args = '';
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        console.log('Person Image',data);
        return ImagesPersonDescriptor.import(data);
      }
    ));
  }


}
