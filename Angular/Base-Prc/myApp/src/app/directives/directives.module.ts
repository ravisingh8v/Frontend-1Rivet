import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { StructureComponent } from './structure/structure.component';
import { AttributeComponent } from './attribute/attribute.component';


@NgModule({
  declarations: [
    StructureComponent,
    AttributeComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ],
  exports:[
    StructureComponent,
    AttributeComponent
  ]
})

export class DirectivesModule { }
