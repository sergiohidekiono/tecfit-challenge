import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const endPoint = environment.endPoints.login;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class CoreService {

  constructor(private httpClient: HttpClient) { }

  login(payload: any): Observable<any> {
    return this.httpClient.post<any>(`${endPoint}/login`, payload, httpOptions);
  }

  logout(): Observable<any> {
    return this.httpClient.post<any>(`${endPoint}/logout`, httpOptions);
  }

  register(payload: any): Observable<any> {
    return this.httpClient.post<any>(`${endPoint}/register`, payload, httpOptions);
  }

}
