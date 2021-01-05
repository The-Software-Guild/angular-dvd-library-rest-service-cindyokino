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

  // public createDvd(newDvd) {
  //   return this.http.post('http://localhost:8080/dvdapi/dvd', {
  //     Data : {
  //       "id": newDvd.id,
  //       "title": newDvd.title,
  //       "releaseYear": newDvd.releaseYear,
  //       "director": newDvd.director,
  //       "rating": newDvd.rating,
  //       "notes": newDvd.notes
  //     }
  //   });
  // }

  // public updateDvd(id, dvdData) {
  //   return this.http.put('http://localhost:8080/dvdapi/dvd' + id);
  // }

  public deleteDvd(id: number) {
    return this.http.delete('http://localhost:8080/dvdapi/dvd/' + id);
  }

}