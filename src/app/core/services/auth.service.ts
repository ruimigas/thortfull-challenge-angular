import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  getRandomUser(): Observable<{ results: User[] }> {
  return this.http.get<{ results: User[] }>(environment.randomUserURL);
  }
}
