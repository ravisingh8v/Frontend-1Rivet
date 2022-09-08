import { NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  
  @Output() list:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
data:any=""

getData(e:any){
this.data = e.target.value
}

onclick(){
  this.list.emit(this.data)
}
check(){
  if(!this.data.length){
    alert("error")
  }
}
}