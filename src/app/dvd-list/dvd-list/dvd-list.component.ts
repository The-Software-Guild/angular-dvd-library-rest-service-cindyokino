import { Component, OnInit, Input } from '@angular/core';
import { DvdService } from 'src/app/dvd.service';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.css']
})
export class DvdListComponent implements OnInit {
  public localDvdsList = []; //Here, we set up an empty input array named dvds. This will store the results of the search.
  
  constructor(private dvdService: DvdService) { }

  ngOnInit(): void {
    this.dvdService.getAll().subscribe((response: any) => { //load all DVDs initially with the dvd-list view
      this.localDvdsList = response;
    });
    this.dvdService.dvdListMaster.subscribe(data => {
      this.localDvdsList = data;
    })
  }

  remove(id: number) {
    this.dvdService.deleteDvd(id).subscribe((response: any) => {
      console.log(id);
      let removedDvdIndex = this.findIndexOfDvdsById(id);

      if (removedDvdIndex > -1) {
        this.localDvdsList.splice(removedDvdIndex, 1);
      }
    });  
  }   
  
  edit(id: number) {

  }

  findIndexOfDvdsById(id): number {
    for(var i = 0; i < this.localDvdsList.length; i++) {
        if(this.localDvdsList[i].id === id) {
            return i;
        }
    }
    return -1;
  }

}
