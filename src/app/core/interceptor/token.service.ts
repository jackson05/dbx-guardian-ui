/*
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { KeycloakService } from '../../auth/keycloak/keycloak.service';


@Injectable({
  providedIn: 'root',
})

export class TokenService {


  private readonly TOKEN_VALUE: string | undefined;
  private readonly TOKEN_KEY = "auth-token";

  constructor(private _keyCloakService: KeycloakService) {
    this.TOKEN_VALUE = this._keyCloakService.keycloak?.token;
  }

  saveToken(): void {
    if (this.TOKEN_VALUE) {
      localStorage.setItem(this.TOKEN_KEY, this.TOKEN_VALUE);
    } else {
      console.error('Token value is undefined');
    }
    console.log('Token saved: ', this.TOKEN_KEY);
  }

  // Retrieve the token
  getToken(): string | null | undefined {
    console.log('Token retrieved: ', this.TOKEN_KEY);
    return localStorage.getItem(this.TOKEN_KEY);
  }


  isTokenValid() {

    const token = this.getToken();
    if (!token) {
      return true;
    }

    const isExpired = new JwtHelperService().isTokenExpired(token);
    console.log('Token is expired: ', isExpired);
    if (isExpired) {
      localStorage.clear();
    }

    return false;
  }
}
  */
