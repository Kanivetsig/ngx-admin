import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AbstractAuthService } from '../services/abstract-auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthorizedOnlyGuard implements CanActivate, CanActivateChild {
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return this.canActivate(childRoute, state);
  }

  constructor(private authService: AbstractAuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if(this.authService.isLoggedIn())
      return true;

    this.router.navigate(['/auth']);
    return false;
  }
}