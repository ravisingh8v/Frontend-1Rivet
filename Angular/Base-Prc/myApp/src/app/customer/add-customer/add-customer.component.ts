import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  title: string
  placeholder:string
  id: number
  constructor(
    private activated: ActivatedRoute,
    private router: Router
  ) {
    this.title = 'add customer';
    this.placeholder='add'
    // console.log(this.activated);
    this.id = activated.snapshot.params['id']
    this.title = this.id ? 'edit customer' : 'Add';
    this.placeholder = this.id ? 'edit customer' : 'Add';


  }

  ngOnInit(): void {
  }
  save() {
this.router.navigate(['customer','customer-list'])
  }
}
