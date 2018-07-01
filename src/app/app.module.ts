import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { HttpModule, JsonpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';


import {
  MatButtonModule, MatListModule, MatIconModule, MatMenuModule, MatInputModule, 
  MatSelectModule,  MatToolbarModule,
  MatTabsModule,
  MatFormFieldModule
} from '@angular/material';


import { AngularFontAwesomeModule } from 'angular-font-awesome';


import {
  CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
  CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
  CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule, TdMediaService
} from '@covalent/core';
import { CommonModule } from '@angular/common';

import { MoviesModule } from './movies/movies.module';
import { PeopleModule } from './people/people.module';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { TvSeriesModule } from './tv-series/tv-series.module';
import { NotFoundComponent } from './shared/layout/not-found/not-found.component';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    //MatCardModule,
    MatMenuModule,
    //MatInputModule,
    //MatSelectModule,
    //MatButtonToggleModule,
    //MatSlideToggleModule,
    //MatProgressSpinnerModule,
    //MatDialogModule,
    //MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    //MatSidenavModule,
    //MatTooltipModule,
    //MatRippleModule,
    /*MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,*/
    /**FontAwesomeModule */
    AngularFontAwesomeModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,

    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    //My modules
    MoviesModule,
    PeopleModule,
    TvSeriesModule,
    AppRoutingModule,

    /*Gallery*/
    
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  providers: [TdMediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
