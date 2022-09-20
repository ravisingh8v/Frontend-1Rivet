import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users.model';




@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})


export class AddCustomerComponent implements OnInit {
  @ViewChild('userForm') cusForm?: NgForm;

  users: Users
  car:any={}
error:string
isSubmited:boolean


  title: string
  placeholder: string
  id: number
  btn: string
  constructor(
    private activated: ActivatedRoute,
    private router: Router
  ) {

    this.users= new Users;


    this.title = 'add customer';
    this.placeholder = 'add'
    console.log(this.activated);
    this.id = activated.snapshot.params['id']
    this.title = this.id ? 'edit customer' : 'Add';
    this.placeholder = this.id ? 'edit customer' : 'Add';
    this.btn = this.id ? 'edit' : 'add';
    

    this.error="this feild is required";
    this.isSubmited=false;
  }

  ngOnInit(): void {
  }
  save() {
    this.router.navigate(['customer', 'customer-list'])
  }
  edit(){
    this.router.navigate(['customer', 'customer-list'])
  }

  onSubmit(){
  
    this.isSubmited=true;
    console.log(this.cusForm);

     
  }
}
