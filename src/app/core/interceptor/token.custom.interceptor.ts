import { KeycloakService } from '../../auth/keycloak/keycloak.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
//import { TokenService } from './token.service'; // Service to manage the token

@Injectable()

export class CustomInterceptor implements HttpInterceptor {
  constructor(private _keycloakService: KeycloakService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._keycloakService.keycloak?.token;

    //this.tokenService.saveToken();
    //const token = this.tokenService.getToken();

    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }

}
