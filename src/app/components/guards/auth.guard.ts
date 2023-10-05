import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authSrvice = inject(AuthService);
  debugger
  let isAuthenticated: boolean = authSrvice.isAuthenticate();
  if (!isAuthenticated) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
