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

  private _opened: boolean = false;

  private _showFilterIcon() {
    return this.router.url === '/transactions';
  }
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
