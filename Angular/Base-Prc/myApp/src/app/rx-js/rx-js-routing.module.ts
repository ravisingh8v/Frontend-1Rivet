import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { RXJSComponent } from './rx-js.component';

const routes: Routes = [{ path: '', component: RXJSComponent,
children:[
  {path:'',redirectTo:'obersvable', pathMatch:'full'},
  {path:'obersvable',component:ObservableComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RXJSRoutingModule { }
