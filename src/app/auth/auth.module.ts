import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { AuthorizedOnlyGuard } from './guards/authorized-only.guard';
import { AnonymousOnlyGuard } from './guards/anonymous-only.guard';
import { AbstractAuthService } from './services/abstract-auth.service';
import { BasicAuthService } from './services/basic-auth.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  declarations: [AuthComponent, LoginComponent, RegistrationComponent],
  providers: [ ]
})
export class AuthModule { }
