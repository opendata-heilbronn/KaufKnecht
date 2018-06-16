import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  user: User;

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      this.user = user;
    });
  }

  constructor(
    private router: Router,
    private auth: AngularFireAuth) {}

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
