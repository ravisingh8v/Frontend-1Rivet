import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public empDetail: Employee
  public id: number
  constructor(public empService: EmployeeService,
    public actRoute: ActivatedRoute
  ) {
    this.empDetail = new Employee

    this.id = 0
    this.actRoute.params.subscribe(res => {
      this.id = res['id']
    })

  }

  ngOnInit(): void {
    this.getEmployeeDetails()
  }

  getEmployeeDetails() {
    this.empService.getUserById(this.id).subscribe(res => {
      this.empDetail = res
    })
  }

}
