import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, throwError, from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private url = 'http://localhost:3000';
  add: string  ;

  constructor(private http: HttpClient) { }

  getTwitterData(add): Observable <any> {
    return this.http.get<any>(this.url + '/search/tweets/' + add);
  }
}
