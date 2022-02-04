import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = './assets/profiles.json';

  constructor(private http: HttpClient) { }

  public getProfileDetails(): Observable<any> {
    return this.http.get(this.url);
  }
}
