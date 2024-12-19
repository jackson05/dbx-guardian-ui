
import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { KeycloakService } from '../keycloak/keycloak.service';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const keyCloakService= inject(KeycloakService);
  const routes=inject(Router);
  if (keyCloakService.keycloak?.isTokenExpired()) {
     routes.navigate(['/login']);
    return false;
  }

  return true;
};


