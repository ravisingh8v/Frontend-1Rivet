import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee/service/employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() data: Employee[]
  constructor(private usersService: EmployeeService,
    private route: Router,
    private actRouter: ActivatedRoute
  ) {
    this.data = []

  }

  ngOnInit(): void {

  }

  onEdit(id: any) {
    // this.usersService.editData(id)

    // relative to its define relation 
    this.route.navigate(['./edit', id], { relativeTo: this.actRouter.parent })

  }

  onDelete(id: any) {
    this.usersService.onDelete(id).subscribe((Response) => {
      this.getUserDetails()
    })
  }
  getDetails(id: any) {
    this.route.navigate(['employee/details', id],)
  }

  getUserDetails() {
    this.usersService.getData().subscribe((Response: any) => {
      this.data = Response
    })
  }

}
