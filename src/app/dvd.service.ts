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

}