import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { environment } from './../../../environments/environment';
import { ResponseDescriptor } from './../types/movies/response.type';
import { ApiService } from './api.service';
import { CreditsDescriptor } from '../types/movies/credits.type';
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class MovieService {

  url = environment.api_url + '/movie';

  test_s = new BehaviorSubject<string>('Default error message');

  /**
   *Creates an instance of MovieService.
   * @param {ApiService} _api_service
   * @memberof MovieService
   */
  constructor(private _api_service: ApiService) { }

  /**
   * Get the top rated movies on TMDb.
   * @param {number} page
   * @returns
   * @memberof MovieService
   */
  getTopRatedMovies(page: number) {
    let url = this.url + '/top_rated';
    let args = '&page=' + page;
    this.test_s.next('TOPRATED');
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return ResponseDescriptor.import(data);
      }
    ));
  }

  /**
   * Get a list of the current popular movies on TMDb. This list updates daily.
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


  /**
   *
   *
   * @param {number} page
   * @returns
   * @memberof MovieService
   */
  getNowPlayingMovies(page: number) {
    let url = this.url + '/now_playing';
    let args = '&page=' + page;
    this.test_s.next('NOWPLAYING');
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
  getLatestMovies(page: number) {
    let url = this.url + '/latest';
    let args = '&page=' + page;
    return this._api_service.get(url, args).pipe(map(
      (data) => {
        return ResponseDescriptor.import(data);
      }
    ));

  }


  /**
   *Get a list of upcoming movies in theatres. This is a release type query that looks for all 
   movies that have a release type of 2 or 3 within the specified date range.
   *
   * @param {number} page
   * @returns
   * @memberof MovieService
   */
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
