import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginUser } from '../core/login/login-model';

@Injectable()
export class ApiService {

  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/loginList';
  }

  getData() {
    return this.http.get(this.baseUrl)
  }

}
