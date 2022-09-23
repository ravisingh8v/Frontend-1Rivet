import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {
  url = 'http://localhost:3000/employees'

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get(this.url)

  }
  addData(data: any) {
    debugger
    return this.http.post(this.url, data.value)
  }
}
