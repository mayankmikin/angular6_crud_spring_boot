import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {



  private baseUrl = 'http://localhost:8080/api/device';

  constructor(private http: HttpClient) { }

  getdevice(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDevice(device: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/save`, device);
  }

  getDevicesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+ `/findall`);
  }

}
