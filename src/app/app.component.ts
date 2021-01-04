import { Component, ViewChild, Injectable  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DvdService } from './dvd.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dvd Library Search';
  @ViewChild('f', { static: false }) searchForm: NgForm;
  submitted = false;
  selectedCategory = "";

  dvds = [];

  constructor(private dvd: DvdService) {}

  onTerm(term: string) {

  //   switch (this.selectedCategory) { 
  //     case "title":
  //       this.dvd.searchByTitle(term).subscribe((response: any) => {
  //         this.dvds = response;
  //       });
  //         break;
  //     case "year":
  //       this.dvd.searchByReleaseYear(term).subscribe((response: any) => {
  //         this.dvds = response;
  //       });
  //         break;
  //     case "director":
  //       this.dvd.searchByDirectorName(term).subscribe((response: any) => {
  //         this.dvds = response;
  //       });
  //         break;
  //     case "rating":
  //       this.dvd.searchByRating(term).subscribe((response: any) => {
  //         this.dvds = response;
  //       });
  //     break;
  // }

    this.dvd.searchByTitle(term).subscribe((response: any) => {
      this.dvds = response;
    });
  }
}
