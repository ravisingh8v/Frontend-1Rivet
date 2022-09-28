import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RXJSRoutingModule } from './rx-js-routing.module';
import { RXJSComponent } from './rx-js.component';
import { ObservableComponent } from './observable/observable.component';
import { CommonServicesService } from '../common-services.service';


@NgModule({
  declarations: [
    RXJSComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    RXJSRoutingModule
  ],
  providers:[
    CommonServicesService
  ]
  
})
export class RXJSModule { }
