import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DvdDetailRoutingModule } from './dvd-detail-routing.module'; //routing set up
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component'; //routing set up


@NgModule({
  declarations: [DvdDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    DvdDetailRoutingModule //routing set up
  ]
})
export class DvdDetailModule { }
