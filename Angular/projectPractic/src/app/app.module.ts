import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterStudioComponent } from './register-studio/register-studio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterStudioComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // AuthModule.forRoot({
    //   ...environment.auth
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
