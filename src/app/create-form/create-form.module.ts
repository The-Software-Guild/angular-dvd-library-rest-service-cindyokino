import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateFormRoutingModule } from './create-form-routing.module'; //routing set up
import { CreateFormComponent } from './create-form/create-form.component'; //routing set up


@NgModule({
  declarations: [CreateFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    CreateFormRoutingModule //routing set up
  ]
})
export class CreateFormModule { }
