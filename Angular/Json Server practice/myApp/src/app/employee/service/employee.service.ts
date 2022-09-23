import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';
import { Observable } from 'rxjs';


@Injectable()
export class EmployeeService {
baseUrl="http://localhost:3000/"
  constructor( private http:HttpClient,
    
    ) { }


    getData(): Observable<any>{
      const url = this.baseUrl + 'users'
      return this.http.get(url)
    }

    postData(user:Employee[]):Observable<any>{
      const url = this.baseUrl + 'users'
      return this.http.post(url,user)
    }

    onDelete(id:number):Observable<any>{
      const url = this.baseUrl + 'users/' + id 
      return this.http.delete(url)
    }
    editData(id:number):Observable<any>{
      const url = this.baseUrl + 'users/' + id 
      return this.http.put(url,id)
    }
}
