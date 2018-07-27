import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/layout/not-found/not-found.component';
import { AboutComponent } from './shared/layout/about/about.component';
import { SearchPageComponent } from './shared/components/search-page/search-page.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'movies', loadChildren:'./movies/movies.module#MoviesModule'},
  {path:'people', loadChildren:'./people/people.module#PeopleModule'},
  {path:'tv', loadChildren:'./tv-series/tv-series.module#TvSeriesModule'},
  {path:'search/:query', component:SearchPageComponent},
  {path:'about', component:AboutComponent},
  {path:'404-not-found', component:NotFoundComponent},
  {path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
