import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {



  private baseUrl = 'http://localhost:8081/api/News';

  constructor(private http: HttpClient) { }

    getNewiesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+ `/findall`);
  }

}
