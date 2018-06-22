import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPeopleComponent } from './list-people/list-people.component';
import { PersonMoviesComponent } from './person-movies/person-movies.component';

const routes: Routes = [
    {path: '', redirectTo: 'people', pathMatch: 'full'},
    //{path:'person/:id', component:MovieDetailComponent},
    {path:'people/:category', component:ListPeopleComponent},
    {path:'person-movies/:id', component:PersonMoviesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
