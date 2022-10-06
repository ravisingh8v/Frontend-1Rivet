import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';
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
    private actRouter: ActivatedRoute) {
    this.data = []



    // const tr = document.querySelector('#tr');
    // const el = document.createElement('td');
    // if (!this.data.length) {
    //   el.innerHTML = 'no record found'
    //   tr?.appendChild(el)
    // }

  }


  ngOnInit(): void {


  }
  onEdit(id: any) {
    // this.usersService.editData(id)
    this.route.navigate(['./edit', id], { relativeTo: this.actRouter.parent })

  }
  onDelete(id: any) {
    this.usersService.onDelete(id).subscribe((Response) => {
      this.getUserDetails()


    })
  }
  getUserDetails() {
    this.usersService.getData().subscribe((Response) => {
      this.data = Response
    })

  }



}
