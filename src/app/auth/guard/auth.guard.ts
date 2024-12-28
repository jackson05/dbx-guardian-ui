import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from '../keycloak/keycloak.service';

export const authGuard: CanActivateFn = (route, state) => {
  const keyCloakService= inject(KeycloakService);
    const routes=inject(Router);
    if (keyCloakService.keycloak?.isTokenExpired()) {
       routes.navigate(['/login']);
      return false;
    }

    return true;
};
