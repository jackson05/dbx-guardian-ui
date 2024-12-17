import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router'; // Import routing providers
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor } from './app/core/token/token.custom.interceptor';
import { routes } from './app/app.routes'; // Define routes separately

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation()), // Add routing
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
