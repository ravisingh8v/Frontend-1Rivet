import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ServerListComponent } from './server-list/server-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ServerListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    PipesModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
