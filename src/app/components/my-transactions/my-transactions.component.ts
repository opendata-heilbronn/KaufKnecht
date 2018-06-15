import { Component, OnInit } from '@angular/core';

import { TransactionModel } from './../../models/transaction.model';
import { ListEntryModel } from './../../models/list-entry.model';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.scss']
})
export class MyTransactionsComponent implements OnInit {

  transactions: TransactionModel[];

  constructor() { }

  ngOnInit() {
    this.transactions = [
      new TransactionModel({
        creator: 'RXxa8l9Qm1PTJe6YpoW6YL7P04T2',
        created: new Date(),
        item: [
          new ListEntryModel({

          })
        ]
      })
    ];
  }

}
