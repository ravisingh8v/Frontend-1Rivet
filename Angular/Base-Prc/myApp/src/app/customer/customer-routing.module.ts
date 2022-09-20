import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [

  {
    path: '', component: CustomerComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo:'customer-list' },
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'edit/:id', component: AddCustomerComponent },
      { path: 'add-customer', component: AddCustomerComponent },
      {path:'reactive-from', component:ReactiveFormComponent}

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
