import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './parent/about/about.component';
import { HomeComponent } from './parent/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, { path: 'about', component: AboutComponent }, { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
