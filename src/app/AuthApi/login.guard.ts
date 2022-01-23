import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const isAuth = this.authService.getIsAuth();
      //console.log('isAuth => ', isAuth);
      //console.log('route => ', state.url);
      if (isAuth) {
        if (state.url === '/login' || state.url === '/register') {
            this.router.navigate(['/']);
          }
      }
    return true;
  }
  
}
