import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StarShipPage, Starship} from '../../shared/models/starship.model';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  constructor(private http: HttpClient) {}

  getStarships(page: number): Observable<StarShipPage> {
  const params = new HttpParams().
  set('page', page)
  return this.http.get<StarShipPage>(environment.swapiApiURL + 'starships/',{params});
  }

  loadNextOrPreviousPage(stringUrl: string){
  return this.http.get<StarShipPage>(stringUrl);
  }
}
