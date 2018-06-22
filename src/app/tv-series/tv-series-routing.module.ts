import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSeriesComponent } from './list-series/list-series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'tv/popular', pathMatch: 'full'},
  {path:'tv/:category', component:ListSeriesComponent},
  {path:'tv/:id', component:SerieDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvSeriesRoutingModule { }
