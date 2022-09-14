import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { CustomComponent } from './custom/custom.component';
import { InbuiltComponent } from './inbuilt/inbuilt.component';


@NgModule({
  declarations: [
    CustomComponent,
    InbuiltComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ],
  exports:[
    CustomComponent,
    InbuiltComponent
  ]
})
export class PipesModule { }
