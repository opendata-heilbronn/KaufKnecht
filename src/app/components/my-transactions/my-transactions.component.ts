import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { TransactionModel } from './../../models/transaction.model';
import { ListEntryModel } from './../../models/list-entry.model';
import { ProductModel } from './../../models/product.model';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.scss']
})
export class MyTransactionsComponent implements OnInit {

  transactions: TransactionModel[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {

      this.db.object('transactions').valueChanges().subscribe(result => {

        this.transactions = Object.keys(result).map(key => {
          var elem = result[key];
          elem.$key = key;
          return elem;
        });

        this.transactions = this.transactions.filter(m=> {
          return m.creator == window.localStorage.getItem('userid');
        });

        console.log(this.transactions);
      });
  }

}
