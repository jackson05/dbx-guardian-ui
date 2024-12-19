import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user/userProfile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {


  constructor() { }
  private _keycloak: Keycloak | undefined;
  private _profile: UserProfile | undefined;

  public get keycloak(): Keycloak {
    if (!this._keycloak) {
      this._keycloak = new Keycloak(
        {
          url: 'http://localhost:8081',
          realm: 'dbx-guardian',
          clientId: 'dbx-guardian-api'
        }
      );
    }
    return this._keycloak;
  }

  get profile() {
    return this._profile;
  }

  async init() {
    console.log("authenticating user ...");
    const authenticated = await this.keycloak?.init(
      {
        onLoad: 'login-required'
      }
    );

    if (authenticated) {
      console.log("user authenticated");
      this._profile = (await this.keycloak?.loadUserProfile()) as UserProfile;
      this._profile.token = this.keycloak?.token;
    } else {
      console.log("user not authenticated");
    }

  }



  login(): Promise<void> {
    return this.keycloak?.login();
  }

  logout(): Promise<void> {
    return this.keycloak?.logout({ redirectUri: 'http://localhost:4200' });
  }

}

