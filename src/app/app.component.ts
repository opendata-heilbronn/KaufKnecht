import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}

  public opened: boolean = false;

  public showFilterIcon() {
    return this.router.url === '/transactions';
  }

  public showSaveIcon() {
    console.log(this.router);
    return this.router.url === '/me/:id';
  }

  // /me includes /me/:id too
  public routeToHome() {
    if (this.router.url === '/me') {
      this.router.navigate(['/me']);
    } else if (this.router.url === '/transactions') {
      this.router.navigate(['/transactions']);
    } else {
      this.router.navigate(['/'])
    }
  }

  public toggleSidebar() {
    this.opened = !this.opened;
  }
}
