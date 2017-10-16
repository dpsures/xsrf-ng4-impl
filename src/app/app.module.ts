import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppHttpInterceptor } from "./http.interceptor";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from './app.component';

import { LoginService } from "./login/login.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppHttpInterceptor,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
