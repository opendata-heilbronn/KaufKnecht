import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { OrdererComponent } from './orderer/orderer.component';
import { ShopperComponent } from './shopper/shopper.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LandingpageComponent,
    OrdererComponent,
    ShopperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
