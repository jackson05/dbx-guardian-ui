import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user/userProfile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  getToken() {
    return localStorage.getItem('dbxToken');
  }


  constructor() { }
  private _keycloak: Keycloak | undefined;
  private _profile: UserProfile | undefined;

  get keycloak(): Keycloak {
    if (!this._keycloak) {
      this._keycloak = new Keycloak(
        {
          url: 'http://localhost:8081',
          realm: 'dbx-guardian',
          clientId: 'dbx-guardian-api'
        },

      );
    }
    return this._keycloak;
  }

  get profile() {
    return this._profile;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Return true if the token exists
  }

  async init() {

    console.log('Authenticating user...');
    const authenticated = await this.keycloak?.init({
      onLoad: 'login-required',
      checkLoginIframe: false,
    });

    if (authenticated) {
      console.log('User authenticated');
      this._profile = (await this.keycloak?.loadUserProfile()) as UserProfile;
      this._profile.token = this.keycloak?.token;
      if (this.keycloak?.token) {
        localStorage.setItem('dbxToken', this.keycloak?.token);
      }

    } else {
      console.log('User not authenticated');
    }

    // Clear the token from the URL
    if (window.location.href.includes('?')) {
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }

  login(): Promise<void> {
    return this.keycloak?.login();
  }


  logout(): Promise<void> {
    return this.keycloak?.logout({ redirectUri: 'http://localhost:4200' });
  }


}

