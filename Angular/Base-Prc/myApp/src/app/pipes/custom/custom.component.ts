import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
num:any
  constructor() { 
this.num=0
  }

  ngOnInit(): void {
  }

input(e:any){
this.num = e.target.value
}
}
