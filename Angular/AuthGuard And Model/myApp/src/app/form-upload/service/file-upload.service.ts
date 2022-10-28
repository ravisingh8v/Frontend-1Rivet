import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { file } from '../model/form-upload.model';

@Injectable()
export class FileUploadService {

  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/file';
  }

  // upload(data: any): Observable<any> {


  //   const formData = new FormData();


  //   formData.append("file", data, data.file);

  //   return this.http.post(this.baseUrl, formData)
  // }

  postData(data: file[]): Observable<file[]> {
    return this.http.post<file[]>(this.baseUrl, data)
  }
}
