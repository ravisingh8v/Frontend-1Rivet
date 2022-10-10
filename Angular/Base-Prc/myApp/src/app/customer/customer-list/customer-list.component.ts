import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: any
  constructor(

  ) {


    this.customers = [{ id: 1, name: "ravi", email: "fsda@gmail.com" },
    { id: 2, name: "samkeet", email: "samkj@gmail.com" }]
  }

  ngOnInit(): void {


  }

}
