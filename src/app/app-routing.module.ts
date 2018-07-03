import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/layout/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path:'movies', loadChildren:'./movies/movies.module#MoviesModule'},
  {path:'people', loadChildren:'./people/people.module#PeopleModule'},
  {path:'tv', loadChildren:'./tv-series/tv-series.module#TvSeriesModule'},
  //{path:'404-not-found', component:},
  {path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
