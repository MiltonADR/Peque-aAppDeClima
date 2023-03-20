import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  api_key = '43df83d00377e64ff3acd29978e1692c';
  apiUrl: string = 'https://api.openweathermap.org/data/2.5';
  constructor(private http: HttpClient) {}

  getApi(city: string): Observable<any> {
    let apiUrl2 = `${this.apiUrl}/weather?q=${city}&appid=${this.api_key}&units=metric`;

    return this.http.get(apiUrl2);
  }
}
