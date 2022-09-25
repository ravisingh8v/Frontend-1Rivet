import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  public users:Employee
public id:any

  constructor(
   public usersService:EmployeeService,
   public router:ActivatedRoute
  ) { 
   this.users= new Employee

   this.router.params.subscribe(params => {
    this.id = params['id'];
    this.getEmployeeById();
  });
  }

  ngOnInit(): void {
    
  //   this.usersService.getData().subscribe((Response) => {
  //     this.getUserDetails()
  // })
}
getEmployeeById(){
this.usersService.getEmployeeById((Number(this.id))).subscribe((params: any) => {
  this.users = params
})
}
}
