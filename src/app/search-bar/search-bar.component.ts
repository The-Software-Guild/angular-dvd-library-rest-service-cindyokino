import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  categoryOptions = [
    { name: "Select category", value: "" },
    { name: "Title", value: "title" },
    { name: "Release year", value: "year" },
    { name: "Director name", value: "director" },
    { name: "Rating", value: "rating" }
  ]
  
  constructor() { }

  ngOnInit() {}

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);    
  }

}
