import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import {AppComponent} from '../app.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();
  // @ViewChild('f', { static: false }) searchForm: NgForm;
  term = '';
  selectedCategory = '';
  @Input() displayCreateDvdForm;

  categoryOptions = [
    { name: "Title", value: "title" },
    { name: "Release year", value: "year" },
    { name: "Director name", value: "director" },
    { name: "Rating", value: "rating" }
  ]
    
  constructor() { }

  ngOnInit() { }

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
    
    this.submitted.emit(eventData);    
  }

  create() { 
    this.displayCreateDvdForm = true;
    // this.should_open = true;
    
    // alert("Button is clicked");
    console.log("CREATE BUTTON CLICKED!");
 }
  

}
