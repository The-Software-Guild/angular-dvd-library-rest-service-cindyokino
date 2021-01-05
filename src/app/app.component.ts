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

  dvds = [];

  constructor(private dvd: DvdService) {}

  onTerm(eventData: any) { //Search dvds based on selected Category

    switch (eventData.selectedCategory) { 
      case "title":
        this.dvd.searchByTitle(eventData.term).subscribe((response: any) => {
          this.dvds = response;
        });
          break;
      case "year":
        this.dvd.searchByReleaseYear(eventData.term).subscribe((response: any) => {
          this.dvds = response;
        });
          break;
      case "director":
        this.dvd.searchByDirectorName(eventData.term).subscribe((response: any) => {
          this.dvds = response;
        });
          break;
      case "rating":
        this.dvd.searchByRating(eventData.term).subscribe((response: any) => {
          this.dvds = response;
        });
      break;
    }
  }
}
