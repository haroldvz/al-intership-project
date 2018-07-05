import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const api_key = environment.api_key;

    if (request.url.includes('api.themoviedb.org/3')) {
        request = request.clone({
            setParams: {
              api_key: api_key
              //language: 'en'
            }
          });
        return next.handle(request);
      }
      // if it's not API request, we just handle it to the next handler
      return next.handle(request);
    }

}