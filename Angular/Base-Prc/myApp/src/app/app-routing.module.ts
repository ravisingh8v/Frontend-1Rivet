import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructureComponent } from './directives/structure/structure.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { CustomComponent } from './pipes/custom/custom.component';
import { InbuiltComponent } from './pipes/inbuilt/inbuilt.component';
import { ServerListComponent } from './server-list/server-list.component';

const routes: Routes = [
  {path:'', pathMatch:'full',  redirectTo:'home'},
  {path: 'home', component:HomeComponent},
  {path: 'structure', component:StructureComponent},
  {path:'cst-pipe', component:CustomComponent},
  {path:'ibt-pipe', component:InbuiltComponent},
  {path:'service-list', component:ServerListComponent},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'RX-JS', loadChildren: () => import('./rx-js/rx-js.module').then(m => m.RXJSModule) },
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
