import { Component, OnInit, HostListener } from '@angular/core';
import { AbstractAuthService } from '../services/abstract-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading: boolean = false;
  public errors: string[] = [];

  public currentYear: string;
  public loginModel: LoginModel = new LoginModel();

  constructor(private _userService: AbstractAuthService, private _router: Router) {
    this.currentYear = new Date().getFullYear().toString();
  }

  ngOnInit() {

  }

  @HostListener('document:keyup', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.login();
    }
  }

  public login() {
    this.validate();
    if (this.errors.length > 0)
      return;

    this.loading = true;
    this._userService.logIn(this.loginModel.username, this.loginModel.password).then(
      (s) => this._router.navigateByUrl("/"),
      (e) => {
        this.errors.push(e.error.response);
        this.loading = false;
      }
    )
  }

  public validate() {
    this.errors = [];

    if (!this.loginModel.username)
      this.errors.push("Name is required");

    if (!this.loginModel.password)
      this.errors.push("Password is required");
  }

}
class LoginModel {
  public username: string;
  public password: string;
}