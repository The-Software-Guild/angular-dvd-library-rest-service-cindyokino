import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DvdDetailComponent } from './dvd-detail/dvd-detail.component'; //define the routing path to the EditForm module

const routes: Routes = [
  { path: 'dvd-detail', component: DvdDetailComponent }, //define the routing path to the EditForm module
  { path: '' , redirectTo:'/dvd-list', pathMatch:'full' } //Redirects any request with no module specified to the home module of the website '/edit-form'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DvdDetailRoutingModule { }
