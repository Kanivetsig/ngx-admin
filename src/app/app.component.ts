/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster/src/toaster-config';

import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-app',
  template: `
  <toaster-container [toasterconfig]="toasterConfig"></toaster-container>
  <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit {

  public toasterConfig: ToasterConfig;

  constructor(toasterConfig: ToasterConfig) {
    this.toasterConfig = toasterConfig;
  }

  ngOnInit() {
  }
}
