import { Component, ViewChild, Injectable, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DvdService } from './dvd.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dvd Library Search';
  @ViewChild('f', { static: false }) searchForm: NgForm;
  @Output() submitted = new EventEmitter<any>();
  term = '';
  selectedCategory = '';

  dvds = [];

  categoryOptions = [
    { name: "Title", value: "title" },
    { name: "Release year", value: "year" },
    { name: "Director name", value: "director" },
    { name: "Rating", value: "rating" }
  ]

  constructor(private dvdService: DvdService, private router: Router) {}
  
  ngOnInit() { }

  onTerm(eventData: any) { //Search dvds based on selected Category

    switch (eventData.selectedCategory) { 
      case "title":
        this.dvdService.searchByTitle(eventData.term).subscribe((response: any) => {
          this.dvdService.dvdListMaster.next(response);
        });
          break;
      case "year":
        this.dvdService.searchByReleaseYear(eventData.term).subscribe((response: any) => {
          this.dvdService.dvdListMaster.next(response);
        });
          break;
      case "director":
        this.dvdService.searchByDirectorName(eventData.term).subscribe((response: any) => {
          this.dvdService.dvdListMaster.next(response);
        });
          break;
      case "rating":
        this.dvdService.searchByRating(eventData.term).subscribe((response: any) => {
          this.dvdService.dvdListMaster.next(response);
        });
      break;
    }
  }

  onChange(option){
    console.info("Selected:",option);
    this.selectedCategory = option; 
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    let eventData = {
      term: this.term,
      selectedCategory: this.selectedCategory
    };    
    this.onTerm(eventData);   
    this.searchForm.reset();
    this.selectedCategory = '';
  }

  create() { 
    this.router.navigate(['/create-form']); 
    console.log("CREATE BUTTON CLICKED!");
 }

}
