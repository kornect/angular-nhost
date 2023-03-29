import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {from, map, Observable, tap} from 'rxjs';
import {NhostService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate, CanActivateChild {

  constructor(private nhost: NhostService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.redirectIfLoggedIn(route, state);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.redirectIfLoggedIn(childRoute, state);
  }

  private redirectIfLoggedIn(next: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ) {
    return from(this.nhost.auth.isAuthenticatedAsync()).pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/sign-in']).then();
          return false;
        }
        return true;
      }));
  }
}
