import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.css']
})
export class DvdListComponent implements OnInit {
  @Input() dvds = []; //Here, we set up an empty input array named dvds. This will store the results of the search.

  constructor() { }

  ngOnInit(): void {
  }

}
