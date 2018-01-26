import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-basic-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-basic-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
