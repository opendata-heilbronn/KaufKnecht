import { Component, OnInit } from '@angular/core';

import { TransactionModel } from './../../models/transaction.model';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.scss']
})
export class MyTransactionsComponent implements OnInit {

  transactions: TransactionModel[];

  constructor() { }

  ngOnInit() {
  }

}
