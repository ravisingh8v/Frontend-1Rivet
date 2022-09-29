import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { RXJSComponent } from './rx-js.component';
import { BehaviorSubjectComponent } from './subject/behavior-subject/behavior-subject.component';
import { SubjectComponent } from './subject/subject/subject.component';

const routes: Routes = [{path:'', component:RXJSComponent,
children:[
  // {path:'',redirectTo:'RX-JS',pathMatch:'full' },
{path:'RX-JS',component:RXJSComponent}
,{path:'observable',component:ObservableComponent},
{path:'subject',component:SubjectComponent},
{path:'b-subject',component:BehaviorSubjectComponent},

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RXJSRoutingModule { }
