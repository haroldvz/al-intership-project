
/**
 * MoviesModule component module
 *
 * Module that set up the MoviesModule component implementation
 * @author Harold Velez <harold.velez.zambrano@correounivalle.edu.co>
 *
 */

import { NgModule } from '@angular/core';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { MovieImagesComponent } from './movie-images/movie-images.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from '../shared/services/movie.service';

import { MovieCrewComponent } from './movie-crew/movie-crew.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';
import { MovieVideosComponent } from './movie-videos/movie-videos.component';
import { MovieCastCrewCardComponent } from './movie-cast-crew-card/movie-cast-crew-card.component';
import { SharedModule } from '../shared/shared.module';
import { DetailMovieService } from '../shared/services/detail-movie.service';



@NgModule({
  imports: [
    MovieRoutingModule,
    SharedModule
  ],
  declarations: [
    ListMoviesComponent,
    MovieDetailComponent,
    MovieImagesComponent,
    MovieCastComponent,
    //MovieCardComponent,
    MovieCrewComponent,
    SimilarMoviesComponent,
    MovieVideosComponent,
    MovieCastCrewCardComponent,

  ],
  providers: [MovieService,DetailMovieService]
})
export class MoviesModule { }
