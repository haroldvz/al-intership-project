import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material';
import { MovieImagesComponent } from './movie-images/movie-images.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from '../shared/services/movie.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    MovieRoutingModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [ListMoviesComponent, MovieDetailComponent, HomeComponent, MovieImagesComponent, MovieCastComponent, MovieCardComponent],
  providers: [MovieService]
})
export class MoviesModule { }
