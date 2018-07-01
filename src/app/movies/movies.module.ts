import { NgModule } from '@angular/core';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { MovieImagesComponent } from './movie-images/movie-images.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from '../shared/services/movie.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieCrewComponent } from './movie-crew/movie-crew.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';
import { MovieVideosComponent } from './movie-videos/movie-videos.component';
import { MovieCastCrewCardComponent } from './movie-cast-crew-card/movie-cast-crew-card.component';
import { MovieBackdropCardComponent } from './movie-backdrop-card/movie-backdrop-card.component';
import { SharedModule } from '../shared/shared.module';
import { DetailMovieService } from '../shared/services/detail-movie.service';
import { MovieSliderComponent } from './movie-slider/movie-slider.component';


@NgModule({
  imports: [
    MovieRoutingModule,
    SharedModule
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
    MovieSliderComponent,
    //GallerySliderComponent
  ],
  providers: [MovieService,DetailMovieService]
})
export class MoviesModule { }
