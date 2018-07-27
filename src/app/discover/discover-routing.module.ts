
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDiscoverComponent } from './list-discover/list-discover.component';
export const routes: Routes = [
    {path:'/discover/movies/', component:ListDiscoverComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule { }