import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './navbar/header/header.component';
import { AuthService } from './service/auth.service';
import { OverlayModule } from "@angular/cdk/overlay";


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule
  ],
  exports: [
    HeaderComponent
  ], providers: [
    AuthService
  ]
})
export class CoreModule { }
