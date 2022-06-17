import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const endPoint = environment.endPoints.login;

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class UserService {

    constructor(private httpClient: HttpClient) { }

    listUsers(perPage: string): Observable<any> {
        return this.httpClient.get<any>(`${endPoint}/users?per_page=${perPage}`, httpOptions);
    }
}