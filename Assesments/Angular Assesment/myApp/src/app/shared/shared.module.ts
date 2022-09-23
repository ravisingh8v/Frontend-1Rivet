import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CureencyPipe } from './pipes/currency/cureency.pipe';



@NgModule({
  declarations: [
 CureencyPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
