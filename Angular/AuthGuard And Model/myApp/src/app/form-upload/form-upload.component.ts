import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { file } from './model/form-upload.model';
import { FileUploadService } from './service/file-upload.service';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.scss']
})
export class FormUploadComponent implements OnInit {


  public form: FormGroup;
  fileName: any;
  public upload: any

  constructor(private formBuilder: FormBuilder,
    private fileService: FileUploadService,
    private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      file: ['']
    })
  }
  onUpload() {
    console.log('hello');


  }
  ngOnInit(): void {
  }

  onFileSelected(files: any) {
    console.log(files.target.files);

    const file = files.target.files[0]
    if (file) {
      this.fileName = file.name
      console.log(this.fileName);

      const formData = new FormData();

      formData.append("thumbnail", file, "sjdfbbf");

      const upload$ = this.http.post("https://upload.uploadcare.com/base/", formData);

      upload$.subscribe()
    }

  }


}
