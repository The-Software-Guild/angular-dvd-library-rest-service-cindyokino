import { Component, Injectable  } from '@angular/core';
import { DvdService } from './dvd.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dvd Library Search';
  
  dvds = [];

  constructor(private dvd: DvdService) {}

  onTerm(term: string) {
    this.dvd.search(term).subscribe((response: any) => {
      this.dvds = response.query.search;
    });
  }
}
