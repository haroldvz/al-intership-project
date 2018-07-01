import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people/list-people.component';
import { PersonMoviesComponent } from './person-movies/person-movies.component';
import { PersonSeriesComponent } from './person-series/person-series.component';
import { PersonImagesComponent } from './person-images/person-images.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PersonCardComponent } from './person-card/person-card.component';
import { MatCardModule } from '@angular/material';
import { PersonDetailComponent } from './person-detail/person-detail.component';


@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatCardModule
  ],
  declarations: [
    ListPeopleComponent, 
    PersonMoviesComponent, 
    PersonSeriesComponent, 
    PersonImagesComponent, PersonCardComponent, PersonDetailComponent,
  ]
})
export class PeopleModule { }
