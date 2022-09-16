import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {
  collection:any=[]
  constructor(
    private CommonService:CommonService
  ) {
    
  }

  
  
  ngOnInit(): void {
    this.CommonService.getCustomer()
    .subscribe(response => {
      this.collection = response;
      console.log(this.collection)
    });
    console.log("hello");
  }


}
