import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';
import { Observable } from 'rxjs';


@Injectable()

export class EmployeeService {
  public baseUrl: string

  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = "http://localhost:3000/"
  }
  // Perfoming Http Methods 
  getData(): Observable<any> {
    const url = this.baseUrl + 'users'
    return this.http.get(url)
  }

  postData(user: Employee[]): Observable<any> {
    const url = this.baseUrl + 'users'
    return this.http.post(url, user)
  }

  onDelete(id: number): Observable<any> {
    const url = this.baseUrl + 'users/' + id;
    return this.http.delete(url)
  }

  editData(employee: Employee[], id: number): Observable<any> {
    const url = this.baseUrl + 'users/' + id;
    return this.http.put(url, employee)
  }

  getEmployeeById(id: number): Observable<any> {
    const url = this.baseUrl + 'users/' + id;
    return this.http.get(url);
  }
}
