import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userModel } from './user-model';

@Injectable()
export class UserApiService {

  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/loginList';
  }

  getData(): Observable<userModel[]> {
    return this.http.get<userModel[]>(this.baseUrl)
  }
  postData(data: userModel[]): Observable<userModel[]> {
    return this.http.post<userModel[]>(this.baseUrl, data)
  }

}
