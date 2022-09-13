import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  vlu:any
array:any=[]
  placeholder:any=""
  constructor() { 
    this.placeholder="enter here"
    // this.array=["hello","world","here"]
  }

  ngOnInit(): void {
  }
  myinput(e:any){
// console.log(e);
   this.vlu = e.target.value
   console.log(this.vlu);
  }

onclick(){
  
  this.array.push(this.vlu)
  console.log(this.array);

}

}
