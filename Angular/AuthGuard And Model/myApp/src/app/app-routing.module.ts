import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/guard/auth.guard';
import { RegisterComponent } from './users/register/register.component';
import { AboutComponent } from './about/about.component';
import { LoginGuard } from './core/guard/login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChangePasswordFormComponent } from './users/change-password-form/change-password-form.component';
import { FormUploadComponent } from './form-upload/form-upload.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'fileUpload', component: FormUploadComponent, canActivate: [AuthGuard] },
  { path: 'changePassword', component: ChangePasswordFormComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },

  {
    path: '**', pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
