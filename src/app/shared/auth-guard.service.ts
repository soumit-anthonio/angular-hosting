import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    debugger;
    if (localStorage.getItem('token') == undefined) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  routeGuard() {}
}
