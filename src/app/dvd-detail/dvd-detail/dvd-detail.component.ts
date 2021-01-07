import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DvdService } from 'src/app/dvd.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements AfterViewInit {
  title = 'DVD details';
  @ViewChild('f', { static: false }) editDvd: NgForm;
  defaultRating='G';
  editedId=null;
  submitted = false;
  dvd = null;

  editedDvd = {
    id: '',
    dvdTitle: '',
    releaseYear: '',
    director: '',
    rating: '',
    notes: ''
  };

  constructor(private dvdService: DvdService, private router: Router) {
    this.init();
   }

  init(): void {
    this.dvdService.dvdInfo.subscribe(data => {
      console.log(data);
      this.dvd = data;
    });
  }

  ngAfterViewInit() {

  }

  // onUpdateFormSubmit() {
  //   this.dvdService.updateDvd(this.editDvd.value).subscribe((response: any) => { 
  //     console.log(response);
  //     alert("DVD edited!");
  //     this.editDvd.reset();
  //     this.router.navigate(['/dvd-list']); //IMPORTANT - ALWAYS REDIRECT WITH THIS router.navigate INSTEAD OF href="/xxx"
  //   }); 
  // }

}
