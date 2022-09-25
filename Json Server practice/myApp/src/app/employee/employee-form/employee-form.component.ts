import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public data: Employee[]
  public form: FormGroup
  public id: any
  public title:string
  constructor(
    public formbuilder: FormBuilder,
    private usersService: EmployeeService,
    private router: ActivatedRoute,
    public route:Router) {

    this.data = []
    this.title='Add Employee'
    this.form = this.formbuilder.group({

      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', []],
      contact:['',[]],
      

      // name:['',[]]
    })
    console.log(router);

    this.router.params.subscribe(response => {
      this.id = response['id'];
      this.getEmployeeById()

      if(this.id){
        this.title='Edit Employee'
      }
    })

  


  }

  

  ngOnInit(): void {
    this.getUserDetails()
  }

  

  onSubmit() {

    if (this.form.valid) {
      if(this.id){
        this.usersService.editData(this.form.value,this.id).subscribe((response:any)=>{
          this.getUserDetails();
        })
        
      } else {
        this.usersService.postData(this.form.value).subscribe((Response: any) => {
          this.getUserDetails();
          
        });
        
      }
      this.onReset()
      this.route.navigate(['employee/list'])
    } 
  }

onReset(){
  this.form.reset()
}

  // this are the common methods we using many times 
  public getUserDetails() {
    this.usersService.getData().subscribe((Response: any) => {
      this.data = Response
    })
  }
  public getEmployeeById(): void {
    this.usersService.getEmployeeById(this.id).subscribe((users: Employee) => {
      this.form.patchValue(users);
    });
  }

}
