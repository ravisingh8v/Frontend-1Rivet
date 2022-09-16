import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    AddCustomerComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  exports:[
    FormsModule
  ]
})
export class CustomerModule { }
