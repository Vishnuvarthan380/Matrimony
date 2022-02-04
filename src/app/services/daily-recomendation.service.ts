import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyRecomendationService {
  url = './assets/profiles.json';

  constructor(private http: HttpClient) { }

  public getDailyRecomendationsDetails(): Observable<any> {
    return this.http.get(this.url);
  }

}
