import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDiscoverComponent } from './list-discover/list-discover.component';
import { DiscoverRoutingModule } from './discover-routing.module';


@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ],
  exports:[
    DiscoverRoutingModule
  ],
  declarations: [ListDiscoverComponent]
})
export class DiscoverModule { }
