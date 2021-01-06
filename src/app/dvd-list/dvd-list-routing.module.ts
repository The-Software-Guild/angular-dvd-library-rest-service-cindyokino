import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DvdListComponent } from './dvd-list/dvd-list.component'; //define the routing path to the DvdList module

const routes: Routes = [
  { path: 'dvd-list', component: DvdListComponent }, //define the routing path to the DvdList module
  { path: '' , redirectTo:'/dvd-list', pathMatch:'full' } //Redirects any request with no module specified to the home module of the website '/dvd-list'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DvdListRoutingModule { }
