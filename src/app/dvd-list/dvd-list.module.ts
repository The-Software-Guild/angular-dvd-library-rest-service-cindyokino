import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DvdListRoutingModule } from './dvd-list-routing.module'; //routing set up
import { DvdListComponent } from './dvd-list/dvd-list.component'; //routing set up


@NgModule({
  declarations: [DvdListComponent],
  imports: [
    CommonModule,
    DvdListRoutingModule //routing set up
  ]
})
export class DvdListModule { }
