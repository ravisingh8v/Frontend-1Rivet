import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() patchValue: EventEmitter<Employee>
  // @Output() view: EventEmitter<Employee>
  constructor(private usersService: EmployeeService,
    private route: Router,
    private actRouter: ActivatedRoute) {
    this.data = []
    // this.view = new EventEmitter
    this.patchValue = new EventEmitter
    // const tr = document.querySelector('#tr');
    // const el = document.createElement('td');
    // if (!this.data.length) {
    //   el.innerHTML = 'no record found'
    //   tr?.appendChild(el)
    // }

  }


  ngOnInit(): void {


  }
  onView(item: Employee) {
    this.route.navigate(['details', item.id], { relativeTo: this.actRouter.parent })
  }

  onEdit(item: Employee) {
    // this.usersService.editData(id)
    this.route.navigate(['edit', item.id], { relativeTo: this.actRouter.parent })
    this.patchValue.emit(item)
  }


  onDelete(id: any) {
    this.usersService.onDelete(id).subscribe((Response) => {
      this.getUserDetails()
      this.route.navigate(['employee'])

    })
  }
  getUserDetails() {
    this.usersService.getData().subscribe((Response) => {
      this.data = Response
    })

  }

  // getValue(data: Employee) {
  //   this.patchValue.emit(data)
  // }

}
