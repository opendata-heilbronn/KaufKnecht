import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { TransactionModel } from './../../models/transaction.model';
import { ListEntryModel } from './../../models/list-entry.model';
import { ProductModel } from './../../models/product.model';
import { UserModel } from '../../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.scss']
})
export class MyTransactionsComponent implements OnInit {

  transactions: TransactionModel[];
  user: User;

  constructor(
    private db: AngularFireDatabase,
    private auth: AngularFireAuth) { }

  ngOnInit() {

    this.auth.user.subscribe(user => {
      if (user == null) {
        this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
          return;
      }

      this.user = user;
      this.loadData();
    });


    
  }


  loadData() {
    this.db.object('transactions').valueChanges().subscribe(result => {

      this.transactions = Object.keys(result).map(key => {
        var elem = result[key];
        elem.$key = key;
        return elem;
      });

      this.transactions = this.transactions.filter(m => {
        return m.creator == this.user.uid;
      });

      console.log(this.transactions);
    });
  }

}
