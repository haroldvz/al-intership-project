import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { MovieImagesComponent } from './movie-images/movie-images.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from '../shared/services/movie.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CovalentLoadingModule } from '@covalent/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { MovieCrewComponent } from './movie-crew/movie-crew.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';
import { MovieVideosComponent } from './movie-videos/movie-videos.component';
import { MovieCastCrewCardComponent } from './movie-cast-crew-card/movie-cast-crew-card.component';
import { MovieBackdropCardComponent } from './movie-backdrop-card/movie-backdrop-card.component';


@NgModule({
  imports: [
    MovieRoutingModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
    FlexLayoutModule,
    CovalentLoadingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule

  ],
  declarations: [
    ListMoviesComponent,
    MovieDetailComponent,
    HomeComponent,
    MovieImagesComponent,
    MovieCastComponent,
    MovieCardComponent,
    MovieCrewComponent,
    SimilarMoviesComponent,
    MovieVideosComponent,
    MovieCastCrewCardComponent,
    MovieBackdropCardComponent,

  ],
  providers: [MovieService]
})
export class MoviesModule { }
