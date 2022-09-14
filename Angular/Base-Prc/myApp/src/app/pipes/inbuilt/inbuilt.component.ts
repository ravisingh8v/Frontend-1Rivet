import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.scss']
})
export class InbuiltComponent implements OnInit {

Dt:any
  public constructor() {
    this.Dt= new Date
    console.log(this.Dt)
   }

  ngOnInit(): void {
  }



}