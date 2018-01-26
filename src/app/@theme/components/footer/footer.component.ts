import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Ngx-Admin Panel - ${new Date().getFullYear()}</span>
  `,
})
export class FooterComponent {
}
