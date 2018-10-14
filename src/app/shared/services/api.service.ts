import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export interface ErrorInterface {
  error_url: string,
  error_status: number,
  error_message: string,
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * Creates an instance of api service.
   * @param _http 
   * @param route 
   */
  constructor(private _http: HttpClient, private route: Router) { }

  /**
   * Error message source of api service
   */
  error_message_source = new BehaviorSubject<any>('This is the Error Page');

  /**
   *
   *
   * @param {string} [url='']
   * @param {string} [args='']
   * @returns
   * @memberof ApiService
   */
  get(url: string = '', args: string = '') {
    url += ('?api_key=' + environment.api_key + args);
    return this._http.get(url).pipe(catchError(this.handleError()));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  handleError<T>(operation = 'operation', result: ErrorInterface = {
    error_url: '',
    error_status: 0,
    error_message: ''
  }) {
    return (error: any): Observable<any> => {
      console.log("Now throwing error");
      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      // ToDo: Global Error handler hier aufrufen....
      this.error_message_source.next(error.message);
      console.error(`Error found in your request URL: ${error.url}`);
      if (error instanceof HttpErrorResponse) {
        console.error('Backend returned status code:', error.status);
        console.error('Response body:', error.message);
      } else {
        console.error('An error ocurred:', error.message);
      }

      result = {
        error_url: error.url ,
        error_status: error.status,
        error_message: error.message
      }

      this.route.navigate(['/error']);
      return of(result);
    };
  }

}
