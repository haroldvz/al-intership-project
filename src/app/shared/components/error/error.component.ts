import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { GlobalErrorHandlerService } from '../../services/global-error-handler.service';
import { map, take } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  error_message: any;

  constructor(public zone: NgZone,private global_error_handler_service: GlobalErrorHandlerService, private router: Router) {
    this.zone.run(() => { this.router.navigate(['/error']); });  
    this.error_message = this.global_error_handler_service.getSubject();
    /*this.global_error_handler_service.getSubject().subscribe((data)=>{
        console.log('new subscribe');
        this.error_message = data;

        console.log(this.error_message);
      });*/
    
  }

  ngOnInit() {

  }

  ngOnDestroy() {
   
  }


}
