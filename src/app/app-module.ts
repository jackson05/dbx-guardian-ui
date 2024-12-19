
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpHandlerFn, HttpInterceptorFn, provideHttpClient, withInterceptors,withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CustomInterceptor } from './core/interceptor/token.custom.interceptor';  // Import the new HTTP functions
import { HttpClientModule } from '@angular/common/http';
import { WorkspaceService } from './core/dbxworkspaces/workspace.service';
//import { TokenService } from './core/interceptor/token.service';
import { KeycloakService } from './auth/keycloak/keycloak.service';



export function kcFactory(kc: KeycloakService) {
  return () => kc.init();
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppComponent,
  //  HttpClientModule
  ],
  providers: [
   /* provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    }*/
      WorkspaceService,
      //TokenService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: CustomInterceptor, // Register the interceptor
        multi: true, // Allow multiple interceptors
      },

      {
        provide: APP_INITIALIZER,
        deps: [KeycloakService],
        useFactory: kcFactory,
        multi: true,
      },
  ],

   bootstrap: [AppComponent]
})
export class AppModule { }
