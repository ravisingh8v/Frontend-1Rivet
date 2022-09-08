import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
value:any
constructor() { 
  this.value="UserList";
  
}

px:any=5;

ngOnInit(): void {
  
}
search:any

users=""
userlist:any=[]

getData(e:any){
  this.users = e.target.value
  // console.log(e.target.value);
}

  onClick(){
    // this.userlist=this.users;
    this.userlist.push(this.users);
  //  this.users="Test"
  
  console.log(this.userlist)
  }
  
  inc(){

  }
dec(){

}
}
