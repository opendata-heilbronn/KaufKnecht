import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(private router: Router) {}

  goOrderer() {
    this.router.navigate(['orderer']); 
  }

  goShopper() {
    this.router.navigate(['shopper']);
  }

  ngOnInit() {
  }

}
