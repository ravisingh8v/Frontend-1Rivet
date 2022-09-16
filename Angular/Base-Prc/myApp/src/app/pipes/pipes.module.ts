import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { CustomComponent } from './custom/custom.component';
import { InbuiltComponent } from './inbuilt/inbuilt.component';
import { FilterPipe } from './custom/filter.pipe';


@NgModule({
  declarations: [
    CustomComponent,
    InbuiltComponent,
    FilterPipe
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
