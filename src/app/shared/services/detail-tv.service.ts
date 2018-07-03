import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/internal/operators/map';

import { ApiService } from './api.service';
import { ResponseDescriptor } from '../types/movies/response.type';
import { ImagesMoviesDescriptor } from '../types/movies/images.type';
import { TVSeriesDescriptor } from '../types/tv-series/detail-tv.type';
import { ResponseTVSeriesDescriptor } from '../types/tv-series/tv-response.type';
import { CreditsTVDescriptor } from '../types/tv-series/tv-credits.type';
import { ResponseVideoDescriptor } from '../types/video.type';


@Injectable({
    providedIn: 'root'
})
export class DetailTVService {

    url = environment.api_url + '/tv/';

    /**
     *Creates an instance of DetailTVService.
     * @param {HttpClient} _http
     * @memberof DetailTVService
     */
    constructor(private _http: HttpClient,
        private _api_service: ApiService) { }



    /**
     *
     *
     * @param {number} id_movie
     * @returns
     * @memberof DetailTVService
     */
    getTVDetail(id_movie: number) {
        let url = this.url + id_movie;
        let args = '&append_to_response=videos';
        return this._api_service.get(url, args).pipe(map(
            (data) => {
                return TVSeriesDescriptor.import(data);
            }
        ));
    }


    /**
     *
     *
     * @param {number} id_movie
     * @returns
     * @memberof DetailTVService
     */
    getSimilarTVSeries(id_movie: number) {
        let url = this.url + id_movie + '/similar';
        let args = '';
        return this._api_service.get(url, args).pipe(map(
            (data) => {
                return ResponseTVSeriesDescriptor.import(data);
            }
        ));
    }


    getCreditsTVSeries(id_tv: number) {
        let url = this.url + id_tv + '/credits';
        let args = '';
        return this._api_service.get(url, args).pipe(map(
            (data) => {
                
                return CreditsTVDescriptor.import(data);
            }
        ));
    }


    /**
     *
     *
     * @param {number} id_movie
     * @returns
     * @memberof DetailTVService
     */
    getTVImages(id_movie: number) {
        let url = this.url + id_movie + '/images';
        let args = '';
        return this._api_service.get(url, args).pipe(map(
            (data) => {
                return ImagesMoviesDescriptor.import(data);
            }
        ));
    }

    /**
     *
     *
     * @param {number} id_tv
     * @returns
     * @memberof DetailTVService
     */
    getTVVideos(id_tv: number) {
        let url = this.url + id_tv + '/videos';
        let args = '';
        return this._api_service.get(url, args).pipe(map(
            (data) => {
                return ResponseVideoDescriptor.import(data);
            }
        ));
    }




}
