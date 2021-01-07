import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DvdService {  
  public dvdListMaster  = new BehaviorSubject<any>([]);  // here where it reads "any", you can change it to the type you want
  public dvdToEdit  = new BehaviorSubject<any>(null);
  public dvdInfo  = new BehaviorSubject<any>(null);
  id: any;

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get('http://localhost:8080/dvdapi/dvds');   
  }

  public getById(id: number) {
    return this.http.get('http://localhost:8080/dvdapi/dvd/' + id);   
  }

  public searchByTitle(term: string) {
    return this.http.get('http://localhost:8080/dvdapi/dvds/title/' + term);
  }

  public searchByReleaseYear(term: string) {
    return this.http.get('http://localhost:8080/dvdapi/dvds/year/' + term);
  }

  public searchByDirectorName(term: string) {
    return this.http.get('http://localhost:8080/dvdapi/dvds/director/' + term);
  }

  public searchByRating(term: string) {
    return this.http.get('http://localhost:8080/dvdapi/dvds/rating/' + term);
  }

  public createDvd(newDvd) {
    return this.http.post('http://localhost:8080/dvdapi/dvd', {
        "title": newDvd.dvdData.dvdTitle,
        "releaseYear": newDvd.dvdData.releaseYear,
        "director": newDvd.dvdData.director,
        "rating": newDvd.dvdData.rating,
        "notes": newDvd.dvdData.notes
    });
  }

  public updateDvd(dvdData) {
    return this.http.put('http://localhost:8080/dvdapi/dvd/' + dvdData.dvdData.dvdId, {
      "id": dvdData.dvdData.dvdId,
      "title": dvdData.dvdData.dvdTitle,
      "releaseYear": dvdData.dvdData.releaseYear,
      "director": dvdData.dvdData.director,
      "rating": dvdData.dvdData.rating,
      "notes": dvdData.dvdData.notes
     });
  }

  public deleteDvd(id: number) {
    if(confirm("Are you sure you want to delete this DVD from your collection?")) {
      return this.http.delete('http://localhost:8080/dvdapi/dvd/' + id);
    }
  }

}