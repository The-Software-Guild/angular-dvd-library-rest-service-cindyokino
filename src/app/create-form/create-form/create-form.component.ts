import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DvdService } from 'src/app/dvd.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  title = 'Add a DVD';
  @ViewChild('f', { static: false }) createDvd: NgForm;
  defaultRating='G';
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

  constructor(private dvdService: DvdService, private router: Router) { }

  ngOnInit(): void {
  }

  onAddFormSubmit() {
    this.dvdService.createDvd(this.createDvd.value).subscribe((response: any) => { 
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
      this.router.navigate(['/dvd-list']); //IMPORTANT - ALWAYS REDIRECT WITH THIS router.navigate INSTEAD OF href="/xxx"

    }); 
  }

}
