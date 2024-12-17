
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpHandlerFn, HttpInterceptorFn, provideHttpClient, withInterceptors,withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CustomInterceptor } from './core/token/token.custom.interceptor';  // Import the new HTTP functions
import { HttpClientModule } from '@angular/common/http';
import { WorkspaceService } from './core/dbxworkspaces/workspace.service';
import { TokenService } from './core/token/token.service';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
   /* provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    }*/
      WorkspaceService,
      TokenService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: CustomInterceptor, // Register the interceptor
        multi: true, // Allow multiple interceptors
      },
  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
