import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DvdService } from 'src/app/dvd.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  title = 'Add a DVD';
  @ViewChild('f', { static: false }) createDvd: NgForm;
  defaultRating='g';
  createdId=null;
  submitted = false;
  createdDvd = {
    id: '',
    dvdTitle: '',
    releaseYear: '',
    director: '',
    rating: '',
    notes: ''
  };

  constructor(private dvd: DvdService) { }

  ngOnInit(): void {
  }

  onAddFormSubmit() {
    this.dvd.createDvd(this.createDvd.value).subscribe((response: any) => { 
      console.log(response);
      this.createdId = response.id;
      alert("DVD created!");

      this.createdDvd.id = response.id;
      this.createdDvd.dvdTitle = response.title;
      this.createdDvd.releaseYear = response.releaseYear;
      this.createdDvd.director = response.director;
      this.createdDvd.rating = response.rating;
      this.createdDvd.notes = response.notes;
      this.createDvd.reset();
    }); 
  }

}
