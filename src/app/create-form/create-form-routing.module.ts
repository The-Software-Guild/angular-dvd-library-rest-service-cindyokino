import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFormComponent } from './create-form/create-form.component'; //define the routing path to the CreateForm module

const routes: Routes = [
  { path: 'create-form', component: CreateFormComponent }, //define the routing path to the CreateForm module
  { path: '' , redirectTo:'/dvd-list', pathMatch:'full' } //Redirects any request with no module specified to the home module of the website '/create-form'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFormRoutingModule { }
