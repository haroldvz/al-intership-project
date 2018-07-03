import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { environment } from './../../../environments/environment';

import { ApiService } from './api.service';
import { CreditsDescriptor } from '../types/movies/credits.type';
import { ResponseTVSeriesDescriptor } from '../types/tv-series/tv-response.type';



@Injectable()
export class TVSerieService {

    url = environment.api_url + '/tv';

    /**
     *Creates an instance of TVSerieService.
     * @param {ApiService} _api_service
     * @memberof TVSerieService
     */
    constructor(private _api_service: ApiService) { }

    /**
     *
     * @param {number} page
     * @returns
     * @memberof TVSerieService
     */
    getTopRatedTVSeries(page: number) {
        let url = this.url + '/top_rated';
        let args = '&page=' + page;
        return this._api_service.get(url, args).pipe(map(
            (data) => {
                return ResponseTVSeriesDescriptor.import(data);
            }
        ));
    }

    /**
     *
     *
     * @param {number} page
     * @returns
     * @memberof TVSerieService
     */
    getPopularTVSeries(page: number) {
        let url = this.url + '/popular';
        let args = '&page=' + page;
        return this._api_service.get(url, args).pipe(map(
            (data) => {
                return ResponseTVSeriesDescriptor.import(data);
            }
        ));

    }


    getOnAirTVSeries(page: number) {
        let url = this.url + '/on_the_air';
        let args = '&page=' + page;
        return this._api_service.get(url, args).pipe(map(
            (data) => {
                return ResponseTVSeriesDescriptor.import(data);
            }
        ));

    }



    getAiringTodayTVSeries(page: number) {
        let url = this.url + '/airing_today';
        let args = '&page=' + page;
        return this._api_service.get(url, args).pipe(map(
            (data) => {
                return ResponseTVSeriesDescriptor.import(data);
            }
        ));

    }


    /**
     *
     * @param 
     * @returns
     * @memberof TVSerieService
     */
    getTVSeriesCredits(id_movie: number) {
        let url = this.url + '/' + id_movie + '/credits';
        let args = '';
        return this._api_service.get(url, args).pipe(map(
            (data) => {
                return CreditsDescriptor.import(data);
            }
        ));
    }



}
