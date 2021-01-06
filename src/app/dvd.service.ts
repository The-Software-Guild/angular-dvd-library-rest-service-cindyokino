import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DvdService {  
  public dvdListMaster  = new BehaviorSubject<any>([]);  // here where it reads "any", you can change it to the type you want

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get('http://localhost:8080/dvdapi/dvds');   
  }

  public searchById(term: string) {
    return this.http.get('http://localhost:8080/dvdapi/dvd/' + term);   
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

  editDvd(value: any) {
    throw new Error('Method not implemented.');
  }

  public updateDvd(id, dvdData) {
    return this.http.put('http://localhost:8080/dvdapi/dvd' + id, {
      "id": id,
      "title": dvdData.dvdTitle,
      "releaseYear": dvdData.releaseYear,
      "director": dvdData.director,
      "rating": dvdData.rating,
      "notes": dvdData.notes
     });
  }

  public deleteDvd(id: number) {
    if(confirm("Are you sure you want to delete this DVD from your collection?")) {
      return this.http.delete('http://localhost:8080/dvdapi/dvd/' + id);
    }
  }

}