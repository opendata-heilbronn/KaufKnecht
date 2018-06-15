import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { OrdererComponent } from './orderer/orderer.component';
import { ShopperComponent } from './shopper/shopper.component';
import { environment } from '../environments/environment';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { MyTransactionsComponent } from './components/my-transactions/my-transactions.component';
import { TransactionListDetailsComponent } from './components/transaction-list-details/transaction-list-details.component';
import { MyTransactionsDetailsComponent } from './components/my-transactions-details/my-transactions-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LandingpageComponent,
    OrdererComponent,
    ShopperComponent,
    TransactionListComponent,
    MyTransactionsComponent,
    TransactionListDetailsComponent,
    MyTransactionsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
