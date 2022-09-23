import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public data: Employee[]
  public form: FormGroup

  constructor(
    public formbuilder: FormBuilder,
    private usersService: EmployeeService) {

    this.data = []
    this.form = this.formbuilder.group({
    
      name: ['', [Validators.required]],
      email: ['', []]
      // name:['',[]]
    })


  }

  ngOnInit(): void {
    this.getUserDetails()
  }

  getUserDetails() {
    this.usersService.getData().subscribe((Response: any) => {
      this.data = Response
    })
  }

  onSubmit() {

    if (this.form.valid) {
      this.usersService.postData(this.form.value).subscribe((Response: any) => {
        this.getUserDetails();
      })
    } else {
      alert('form is not valid')
    }

  }

}
