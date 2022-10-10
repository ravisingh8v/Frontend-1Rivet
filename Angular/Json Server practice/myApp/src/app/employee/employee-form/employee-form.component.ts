import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public data: Employee[]
  public form: FormGroup
  public id: any

  constructor(
    public actRouter: ActivatedRoute,
    public formbuilder: FormBuilder,
    private usersService: EmployeeService) {

    this.data = []
    this.form = this.formbuilder.group({

      name: ['', [Validators.required]],
      email: ['', []]
      // name:['',[]]
    })


    // this.actRouter.params.subscribe(res => {
    //   this.id = res['id']

    //   if (this.id) {

    //     this.getElementById()
    //     console.log(res);
    //     console.log('mera naaaam nhi id hai ' + this.id['id']);
    //   }


    // })
    this.actRouter.params.subscribe(res => {
      this.id = res['id']
      // console.log(res);
    })
  }


  ngOnInit(): void {
    this.getUserDetails()

  }

  ngAfterViewInit(): void {

  }

  getValue(value: Employee) {
    this.form.patchValue(value)
  }



  getUserDetails() {
    this.usersService.getData().subscribe((Response: any) => {
      this.data = Response
    })
  }


  // getuserdetails2() { this.usersService.getData2().subscribe(res => this.data = res) }

  onSubmit() {

    if (this.form.valid) {

      if (this.id) {
        this.usersService.editData(this.form.value, this.id).subscribe(res => {
          // this.form = res;
          this.getUserDetails();
        }
        )
      } else {
        this.usersService.postData(this.form.value).subscribe((Response: any) => {
          this.getUserDetails();
        })
      }
    } else {
      alert('form is not valid')
    }
  }

  // getElementById() {
  //   this.usersService.getUserById(this.id).subscribe(res =>

  //     // console.log(res)
  //     this.form.patchValue(res)
  //   )
  // }


}

