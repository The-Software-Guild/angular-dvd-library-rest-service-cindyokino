import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CreateFormComponent } from './create-form/create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DvdListComponent,
    SearchBarComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
