import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';
import { Observable } from 'rxjs';


@Injectable()
export class EmployeeService {
  public baseUrl: string
  // baseUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/"

  }


  getData(): Observable<any> {
    const url = this.baseUrl + 'users'
    return this.http.get(url)
  }

  postData(user: Employee[]): Observable<Employee> {
    const url = this.baseUrl + 'users'
    return this.http.post(url, user)
  }

  onDelete(id: number): Observable<Employee> {
    const url = this.baseUrl + 'users/' + id
    return this.http.delete(url)
  }
  editData(user: Employee[], id: number): Observable<Employee> {
    const url = this.baseUrl + 'users/' + id
    return this.http.put(url, user)
  }

  getUserById(id: number): Observable<Employee> {
    const url = this.baseUrl + 'users/' + id
    return this.http.get(url)
  }

  getData2(): Observable<any> {
    const url = this.baseUrl + 'users/';
    return this.http.get(url)
  }

}
