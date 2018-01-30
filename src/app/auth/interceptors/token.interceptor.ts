import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AbstractAuthService } from '../services/abstract-auth.service';
import { UserAuth } from '../models/user-auth.model';

import 'rxjs/add/operator/do';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _injector: Injector){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authService: AbstractAuthService = this._injector.get(AbstractAuthService);
    console.log("in interceptor");
    if (!authService.isLoggedIn())
      return next.handle(req);
      console.log("user logged");

    let cloned = req.clone({
      setHeaders: {
        token: authService.user.token
      }
    });
    
    return next.handle(cloned).do(
      (event) => { },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 403) {
            authService.logOut()
          }
        }
      });
  }
}
