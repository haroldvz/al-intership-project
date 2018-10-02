import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalErrorHandlerService } from '../../services/global-error-handler.service';
import { map, take } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  providers: [GlobalErrorHandlerService],
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  error_message: any;
  mc = '';
  navigationSubscription;

  constructor(private global_error_handler_service: GlobalErrorHandlerService, private router: Router) {
    
    this.mc = this.global_error_handler_service.m;
    this.global_error_handler_service.getSubject().subscribe((data)=>{
      console.log('new subscribe');
      this.error_message = data;
    });
    
    
  }

  
  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }


}
