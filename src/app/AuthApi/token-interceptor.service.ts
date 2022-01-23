import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _auth:AuthService) { }

  intercept(req: any, next:any){
    const authToken = this._auth.getToken();

    let tokenizedReq= req.clone({
      headers: req.headers.set('Authorization','Bearer ' + authToken)
    });
    return next.handle(tokenizedReq)
  }
}
