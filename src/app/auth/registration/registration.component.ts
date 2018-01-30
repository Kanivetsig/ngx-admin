import { Component, OnInit } from '@angular/core';
import { AbstractAuthService } from '../services/abstract-auth.service';
import { Router } from '@angular/router';
import { UsersProvider } from '../../data/users.provider';

import "rxjs/add/operator/catch"
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public loading: boolean = false;
  public success: boolean = false;

  public errors: string[] = [];

  public registrationModel = new RegistrationModel();

  public currentYear: string;

  constructor(private _usersProvider: UsersProvider, 
    private _router: Router, private _userService: AbstractAuthService) {
      this.currentYear = new Date().getFullYear().toString();
     }

  ngOnInit() {
  }

  public validate(emailModel){
    this.errors = [];

    if (!this.registrationModel.username)
      this.errors.push("Name is required");

    if (!this.registrationModel.password)
      this.errors.push("Password is required");

    if(emailModel.errors)
      this.errors.push("Email is invalid");
  }

  public register(emailModel){
    this.validate(emailModel);
    if(this.errors.length > 0)
      return;
    
    this.loading = true;
    this._usersProvider.register(this.registrationModel.username, this.registrationModel.email, this.registrationModel.password)
      .subscribe(
        (s) => {
          this.success = true;
          setTimeout(() => this._router.navigateByUrl("/login"), 5000);
        },
        (e) => {
          if(e.status === 404)
            this.errors.push("Registration is not available");
          else
            this.errors.push(e.error.response);
          this.loading = false;
        }
      );
  }

}

class RegistrationModel {
  public username: string;
  public email: string;
  public password: string;
}
