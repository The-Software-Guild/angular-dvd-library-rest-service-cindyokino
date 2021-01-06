import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditFormRoutingModule } from './edit-form-routing.module'; //routing set up
import { EditFormComponent } from './edit-form/edit-form.component'; //routing set up


@NgModule({
  declarations: [EditFormComponent],
  imports: [
    CommonModule,
    FormsModule,
   EditFormRoutingModule //routing set up
  ]
})
export class EditFormModule { }
