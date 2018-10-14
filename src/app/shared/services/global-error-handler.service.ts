import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService  implements ErrorHandler  {
  
  private error_message_source = new BehaviorSubject<any>('Default error message');
  error_message$ = this.error_message_source.asObservable();

  test_s;

  constructor(private injector:Injector) { }

  handleError(error: any): void {
    const router = this.injector.get(Router);
    console.error(`Error found in your request URL: ${router.url}`);
    if(error instanceof HttpErrorResponse){
      console.error('Backend returned status code:',error.status);
      console.error('Response body:',error.message);
    } else{
      console.error('An error ocurred:',error.message);
    }

    this.sendData('holamundo');
    //this.test_s.next('TOPRATED');

    
    
    
    this.test_s = throwError(error);
    router.navigate(['/error']);
     
  }

  sendData(data:any){
    this.error_message_source.next([data]);
    console.log(this.getSubject());
    console.log('sendData');
    console.error(this.error_message_source.value);
  }

  getSubject():Observable<any>{
    return this.error_message_source.asObservable();
  }

}
