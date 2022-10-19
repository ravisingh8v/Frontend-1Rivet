import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HeaderComponent } from './navbar/header/header.component';



@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
