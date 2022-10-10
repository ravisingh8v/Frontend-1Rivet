import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public form: FormGroup
  constructor(public formb: FormBuilder) {
    this.form = formb.group({

    })
  }

  ngOnInit(): void {
  }

}
