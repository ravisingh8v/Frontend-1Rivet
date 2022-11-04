import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { city, country, state } from '../model/filter.model';

@Injectable()
export class ScServiceService {
  public baseUrl: string
  // public handleError: any
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  getCountries(): Observable<country[]> {
    return this.http.get<country[]>(`${this.baseUrl}/country`)
  }
  getStates(): Observable<state[]> {
    return this.http.get<state[]>(`${this.baseUrl}/state`)
  }
  getCity(): Observable<city[]> {
    return this.http.get<city[]>(`${this.baseUrl}/city`)
  }

}
