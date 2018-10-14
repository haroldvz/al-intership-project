import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  error_message: any;

  constructor(public zone: NgZone,private api_s: ApiService, private router: Router) {
    this.zone.run(() => { this.router.navigate(['/error']); });  
     this.api_s.error_message_source.subscribe((data)=>{
      console.log(data);
      this.error_message = data;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
   
  }


}
