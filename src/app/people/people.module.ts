import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people/list-people.component';
import { PersonMoviesComponent } from './person-movies/person-movies.component';
import { PersonSeriesComponent } from './person-series/person-series.component';
import { PersonImagesComponent } from './person-images/person-images.component';
import { PeopleRoutingModule } from './people-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  declarations: [
    ListPeopleComponent, 
    PersonMoviesComponent, 
    PersonSeriesComponent, 
    PersonImagesComponent,
  ]
})
export class PeopleModule { }
