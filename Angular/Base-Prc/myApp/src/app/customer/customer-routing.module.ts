import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [

  {
    path: '', component: CustomerComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo:'customer-list' },
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'edit/:id', component: AddCustomerComponent },
      { path: 'add-customer', component: AddCustomerComponent },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
