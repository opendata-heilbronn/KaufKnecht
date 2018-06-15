import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { MyTransactionsComponent } from './components/my-transactions/my-transactions.component';
import { TransactionListDetailsComponent } from './components/transaction-list-details/transaction-list-details.component';
import { MyTransactionsDetailsComponent } from './components/my-transactions-details/my-transactions-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingpageComponent },

  {
    path: 'transactions',
    component: TransactionListComponent,
    children: [
      { path: 'details', component: TransactionListDetailsComponent }
    ]
  },
  {
    path: 'me',
    component: MyTransactionsComponent,
    children: [
      { path: 'details', component: MyTransactionsDetailsComponent }
    ]
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
