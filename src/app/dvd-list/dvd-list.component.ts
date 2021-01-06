import { Component, OnInit, Input } from '@angular/core';
import { DvdService } from '../dvd.service';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.css']
})
export class DvdListComponent implements OnInit {
  @Input() dvds = []; //Here, we set up an empty input array named dvds. This will store the results of the search.

  constructor(private dvd: DvdService) { }

  ngOnInit(): void {
  }

  remove(id: number) {
    this.dvd.deleteDvd(id).subscribe((response: any) => {
      console.log(id);
      console.log(this.dvds);
      let removedDvdIndex = this.findIndexOfDvdsById(id);

      if (removedDvdIndex > -1) {
        this.dvds.splice(removedDvdIndex, 1);
      }
    });  
  }   
  
  edit(id: number) {

  }

  findIndexOfDvdsById(id): number {
    for(var i = 0; i < this.dvds.length; i++) {
        if(this.dvds[i].id === id) {
            return i;
        }
    }
    return -1;
  }

}
