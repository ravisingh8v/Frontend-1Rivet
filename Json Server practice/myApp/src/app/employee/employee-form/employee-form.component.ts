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
  public title: string
  public isSubmit: boolean
  public btn:string
  constructor(
    public formbuilder: FormBuilder,
    private usersService: EmployeeService,
    private router: ActivatedRoute,
    public route: Router) {


    // initializing var 
    this.isSubmit = false
    this.data = []
    this.title = 'Add Employee'
    this.btn = 'Save'
    

    // form validation 
    this.form = this.formbuilder.group({

      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', []],
      contact: [[]],
      date: [Date, []]


      // name:['',[]]
    })
    console.log(router);
    console.log(this.form);


    // patching data here 

    this.router.params.subscribe(response => {
      this.id = response['id'];
      if (this.id) {
        this.getEmployeeById()
      }

      // set page title according to  page 
      if (this.id) {
        this.title = 'Edit Employee'
        this.btn = 'Edit'
      }
    })




  }



  ngOnInit(): void {
    this.getUserDetails()
  }



  onSubmit() {
    this.isSubmit = true
    if (this.form.valid) {

      if (this.id) {
        this.usersService.editData(this.form.value, this.id).subscribe((response: any) => {
          this.getUserDetails();
        })

      } else {
        this.usersService.postData(this.form.value).subscribe((Response: any) => {
          console.log(Response);

          this.getUserDetails();

        });

      }
      this.onReset()
      this.route.navigate(['employee/list'])
    }
  }

  onReset() {
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
