import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people/list-people.component';
import { PersonMoviesComponent } from './person-movies/person-movies.component';
import { PersonSeriesComponent } from './person-series/person-series.component';
import { PersonImagesComponent } from './person-images/person-images.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { SharedModule } from '../shared/shared.module';
import { DetailPersonService } from '../shared/services/detail-person.service';
import { PeopleService } from '../shared/services/people.service';


@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule
  ],
  declarations: [
    ListPeopleComponent,
    PersonMoviesComponent,
    PersonSeriesComponent,
    PersonImagesComponent,
    PersonCardComponent,
    PersonDetailComponent,
    
  ],
  providers: [
    DetailPersonService,
    PeopleService,
  ],
  entryComponents:
  []
})
export class PeopleModule { }
