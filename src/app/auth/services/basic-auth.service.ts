import { Injectable } from '@angular/core';
import { UserAuth } from '../models/user-auth.model';
import { AbstractAuthService } from './abstract-auth.service';
import { Observable } from 'rxjs/Observable';
import { UsersProvider } from '../../data/users.provider';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';

@Injectable()
export class BasicAuthService implements AbstractAuthService {

  public user: UserAuth = null;

  constructor(private _usersProvider: UsersProvider, private _router: Router) {
    this.retrieveUser();
  }

  public logIn(username: string, password: string): Promise<any> {
    let req = this._usersProvider.logIn(username, password);
    req.then((s) => this.attachUser(username, s.token)).catch((e) => { });
    return req;
  }
  public logOut() {
    this.user = null;
    window.localStorage.clear();
    this._router.navigateByUrl("/auth");
  }
  public isLoggedIn(): boolean {
    return this.user !== null;
  }

  private retrieveUser() {
    if(this.user !== null)
      return;

    if (window.localStorage["__userAuth"]) {
      try {
        this.user = JSON.parse(window.localStorage["__userAuth"]) as UserAuth;
      } 
      catch{
        this.user = null;
      }
    }
  }

  private attachUser(username: string, token: string) {
    this.user = new UserAuth();
    this.user.name = username;
    this.user.token = token;

    window.localStorage["__userAuth"] = JSON.stringify(this.user);
  }
}
