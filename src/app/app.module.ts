import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateFormModule } from './create-form/create-form.module';
import { EditFormModule } from './edit-form/edit-form.module';
import { DvdListModule } from './dvd-list/dvd-list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CreateFormModule,
    EditFormModule,
    DvdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
