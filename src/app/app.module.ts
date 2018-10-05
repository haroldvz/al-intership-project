import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TdMediaService } from '@covalent/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainInterceptor } from './app-interceptor.interceptor';
import { MoviesModule } from './movies/movies.module';
import { PeopleModule } from './people/people.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { TvSeriesModule } from './tv-series/tv-series.module';
import { NotFoundComponent } from './shared/layout/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    //My modules
    MoviesModule,
    PeopleModule,
    TvSeriesModule,
    AppRoutingModule,
    //shared-module
    SharedModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  providers: [
    TdMediaService,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true
    },
    /*{
      provide: ErrorHandler, useClass: GlobalErrorHandlerService
    },*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
