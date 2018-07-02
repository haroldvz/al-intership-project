import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPeopleComponent } from './list-people/list-people.component';
import { PersonMoviesComponent } from './person-movies/person-movies.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes: Routes = [
    {path: '', redirectTo: 'people', pathMatch: 'full'},
    {path:'people/:category', component:ListPeopleComponent},
    {path:'person/:id', component:PersonDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
