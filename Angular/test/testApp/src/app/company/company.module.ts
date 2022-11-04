import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../share/service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from '../share/share.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CompanyCommunicationService } from '../share/service/company-communication.service';
import { CompanyResolver } from './company.resolver';
import { DependentDropdownComponent } from './dependent-dropdown/dependent-dropdown.component';
import { ScServiceService } from './dependent-dropdown/service/sc-service.service';
import { SortPipe } from './dependent-dropdown/pipe/sort.pipe';
import { DynamicComponent } from './dynamic/dynamic.component';



@NgModule({
  declarations: [
    CompanyComponent,
    CompanyFormComponent,
    CompanyListComponent,
    DependentDropdownComponent,
    SortPipe,
    DynamicComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ShareModule,
    NgSelectModule,
    FormsModule

  ],
  providers: [
    ApiService,
    CompanyCommunicationService,
    CompanyResolver,
    ScServiceService
  ]

})
export class CompanyModule { }
