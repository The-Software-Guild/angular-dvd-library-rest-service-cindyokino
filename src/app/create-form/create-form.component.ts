import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  title = 'Add a DVD';
  selectedRating='';
  // public should_open = false;

  // create(){
  //  this.should_open = true;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
