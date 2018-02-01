import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AbstractAuthService } from '../services/abstract-auth.service';
import { UserAuth } from '../models/user-auth.model';
import { ToasterService } from 'angular2-toaster/src/toaster.service';
import 'rxjs/add/operator/do';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _injector: Injector, private _toasterService: ToasterService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authService: AbstractAuthService = this._injector.get(AbstractAuthService);
    if (!authService.isLoggedIn())
      return next.handle(req);

    let cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.user.token}`
      }
    });
    
    return next.handle(cloned).do(
      (event) => { },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 403) {
            this._toasterService.popAsync("error", "Authentication failed", "Your token has expired. You will be redirected to login page in 5 seconds");
            setTimeout(() => authService.logOut(), 5000);
          }
        }
      });
  }
}
