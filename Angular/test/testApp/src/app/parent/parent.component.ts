import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
red:any="red"

  fontSize:number
  constructor() {
    this.fontSize=50;
   }

  ngOnInit(): void {

  }
public resize(size:string){
this.fontSize = size==="plus" ? 
this.fontSize =  this.fontSize+1: 
this.fontSize = this.fontSize-1;

}

}
