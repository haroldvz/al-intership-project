import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TdMediaService } from '@covalent/core';
import { CommonModule } from '@angular/common';

import { MoviesModule } from './movies/movies.module';
import { PeopleModule } from './people/people.module';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { TvSeriesModule } from './tv-series/tv-series.module';
import { NotFoundComponent } from './shared/layout/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { MainInterceptor } from './app-interceptor.interceptor';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
