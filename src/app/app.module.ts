import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { MyTransactionsComponent } from './components/my-transactions/my-transactions.component';
import { TransactionListDetailsComponent } from './components/transaction-list-details/transaction-list-details.component';
import { MyTransactionsDetailsComponent } from './components/my-transactions-details/my-transactions-details.component';
import { SidebarModule } from 'ng-sidebar';
import { ProfileComponent } from './components/profile/profile.component';
import { ReceiptPhotoComponent } from './components/receipt-photo/receipt-photo.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LandingpageComponent,
    TransactionListComponent,
    MyTransactionsComponent,
    TransactionListDetailsComponent,
    MyTransactionsDetailsComponent,
    ProfileComponent,
    ReceiptPhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SidebarModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
