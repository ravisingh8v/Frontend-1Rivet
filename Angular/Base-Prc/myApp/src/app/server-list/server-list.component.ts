import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonServicesService } from '../common-services.service';


@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {
  da: any;
  form: FormGroup
  data: any = []
  public formData:any
  constructor(
    public formbuilder: FormBuilder,
    public common: CommonServicesService,
    public httpClient:HttpClient
  ) {
    this.form = this.formbuilder.group({
      name: [''],
      salary: ['']
    })
    this.formData=this.form.value
   
  }

onAdd(e:any){
  this.common.addData(e)
  .subscribe(
        (data:any) => {
            console.log(data);
        }
      )
      console.log(this.formData)
//  this.httpClient.post(`http://localhost:3000/employees`,{name:'mark'}).subscribe(
//     (data:any) => {
//         console.log(data);
//     }
//   )
}

  ngOnInit(): void {

    this.common.getData().subscribe((result) => {
      this.data = result
      console.log(this.data)


    })
      ;
    //  console.log(this.data)


  }



}
