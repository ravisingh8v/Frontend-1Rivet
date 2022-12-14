import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [{
  path: '', component: EmployeeComponent,
  children:
    [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'edit/:id', component: EmployeeFormComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'list', component: EmployeeFormComponent },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
