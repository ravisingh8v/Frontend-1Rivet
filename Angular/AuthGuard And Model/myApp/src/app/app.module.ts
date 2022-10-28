import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*-------------------------------------------------------------------------------------------*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserApiService } from './users/user-api.service';
import { AuthGuard } from './core/guard/auth.guard';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from './core/service/auth.service';
import { AboutComponent } from './about/about.component';
import { LoginGuard } from './core/guard/login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { ChangePasswordFormComponent } from './users/change-password-form/change-password-form.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { FileUploadService } from './form-upload/service/file-upload.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    PageNotFoundComponent,
    ChangePasswordFormComponent,
    FormUploadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,

  ],
  providers: [
    UserApiService,
    AuthGuard,
    LoginGuard,
    FileUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
