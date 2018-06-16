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

  public toggleSidebar() {
    this.opened = !this.opened;
  }
}
