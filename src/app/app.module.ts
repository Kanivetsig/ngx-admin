/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/**Nebular */
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**App */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


/**Data providers */
import { RequestHandler } from './data/request.handler';
import { UsersProvider } from './data/users.provider';
import { Repository } from './data/repository';


/**Auth services */
import { AuthorizedOnlyGuard } from './auth/guards/authorized-only.guard';
import { AnonymousOnlyGuard } from './auth/guards/anonymous-only.guard';
import { BasicAuthService } from './auth/services/basic-auth.service';
import { AbstractAuthService } from './auth/services/abstract-auth.service';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { DemoAuthService } from './auth/services/demo-auth.service';

/** Toaster service */
import { ToasterModule } from 'angular2-toaster/src/toaster.module';
import { TOASTER_CONFIG } from './toaster.config';
import { ToasterConfig } from 'angular2-toaster/src/toaster-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToasterModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  exports:[
    NgbModule,
    CoreModule,
    ThemeModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToasterModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: ToasterConfig, useValue: TOASTER_CONFIG},
    RequestHandler, UsersProvider, Repository,
    AuthorizedOnlyGuard, AnonymousOnlyGuard,
    {
      provide: AbstractAuthService,
      useClass: DemoAuthService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
})
export class AppModule {
}
