import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DvdService } from 'src/app/dvd.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  title = 'Add a DVD';
  @ViewChild('f', { static: false }) editDvd: NgForm;
  defaultRating='g';
  editedId=null;
  submitted = false;
  editedDvd = {
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
    this.dvd.editDvd(this.editDvd.value).subscribe((response: any) => { 
      console.log(response);
      this.editedId = response.id;
      alert("DVD edited!");

      this.editedDvd.id = response.id;
      this.editedDvd.dvdTitle = response.title;
      this.editedDvd.releaseYear = response.releaseYear;
      this.editedDvd.director = response.director;
      this.editedDvd.rating = response.rating;
      this.editedDvd.notes = response.notes;
      this.editedDvd.reset();
    }); 
  }

}
