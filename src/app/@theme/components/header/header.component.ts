import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { AbstractAuthService } from '../../../auth/services/abstract-auth.service';
import { UserAuth } from '../../../auth/models/user-auth.model';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: UserAuth;

  userMenu = [{ title: 'Log out'}];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private authService: AbstractAuthService,
              private themeService: NbThemeService) {
  }

  ngOnInit() {
    this.user = this.authService.user;
  }

  logout(){
    //Resetting theme as auth layout works only with default theme
    this.themeService.changeTheme("default");
    this.authService.logOut();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    
  }
}
