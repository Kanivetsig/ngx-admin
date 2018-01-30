import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  DashboardComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
