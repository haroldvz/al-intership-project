import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  /**
   *
   *
   * @param {string} [url='']
   * @param {string} [args='']
   * @returns
   * @memberof ApiService
   */
  get(url: string = '', args: string = '') {
    url += ('?api_key=' + environment.api_key + args + '&language=' + environment.language );
    return this._http.get(url);
  }

}
