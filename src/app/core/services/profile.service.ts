import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  // Simulate purposes only
  updateProfile(data: any): Observable<any> {
  return this.http.post<any>('someUrl', data);
  }

}
