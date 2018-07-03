import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { environment } from './../../../environments/environment';
import { ResponseDescriptor } from './../types/movies/response.type';
import { ApiService } from './api.service';
import { CreditsDescriptor } from '../types/movies/credits.type';



@Injectable()
export class MovieService {

  url = environment.api_url + '/movie';

  /**
   *Creates an instance of MovieService.
   * @param {ApiService} _api_service
   * @memberof MovieService
   */
  constructor(private _api_service: ApiService) { }

  /**
   *
   * @param {number} page
   * @returns
   * @memberof MovieService
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

  /**
   *
   *
   * @param {number} page
   * @returns
   * @memberof MovieService
   */
  getPopularMovies(page: number) {
    let url = this.url + '/popular';
    let args = '&page=' + page;
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return ResponseDescriptor.import(data);
      }
    ));

  }


  getNowPlayingMovies(page: number) {
    let url = this.url + '/now_playing';
    let args = '&page=' + page;
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return ResponseDescriptor.import(data);
      }
    ));

  }



  getLatestMovies(page: number) {
    let url = this.url + '/latest';
    let args = '&page=' + page;
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return ResponseDescriptor.import(data);
      }
    ));

  }

  getUpcomingMovies(page: number) {
    let url = this.url + '/upcoming';
    let args = '&page=' + page;
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return ResponseDescriptor.import(data);
      }
    ));

  }




  /**
   *
   * @param 
   * @returns
   * @memberof MovieService
   */
  getMovieCredits(id_movie: number) {
    let url = this.url + '/' + id_movie + '/credits';
    let args = '';
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return CreditsDescriptor.import(data);
      }
    ));
  }



}
