import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DvdService {

  constructor(private http: HttpClient) { }

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

  // public updateDvd(id, dvdData) {
  //   return this.http.put('http://localhost:8080/dvdapi/dvd' + id);
  // }

  public deleteDvd(id: number) {
    if(confirm("Are you sure you want to delete this DVD from your collection?")) {
      return this.http.delete('http://localhost:8080/dvdapi/dvd/' + id);
    }
  }

}