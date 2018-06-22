import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'movie/:id', component:MovieDetailComponent},
    {path:'movies/:category', component:ListMoviesComponent},
    {path:'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }