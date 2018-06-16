import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionModel } from './../../models/transaction.model';
import { ProductModel } from '../../models/product.model';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import * as moment from 'moment';

import {NgForm} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
@Component({
  selector: 'app-my-transactions-details',
  templateUrl: './my-transactions-details.component.html',
  styleUrls: ['./my-transactions-details.component.scss']
})
export class MyTransactionsDetailsComponent implements OnInit {

  new: boolean = false;
  id: string;
  transaction: TransactionModel;
  products: ProductModel[];

  searchProductString: string = '';
  showAutocomplete: boolean = false;

  user: User;

  getProducts() {
    if (this.products == null)
      return [];

    return this.products.filter(m => {
      return m.title && m.title.toLowerCase().indexOf(this.searchProductString.toLowerCase()) > -1;
    }).slice(0, 20);

  }

  increaseProductCount(product: ProductModel) {
    product['count']++;
  }

  decreaseProductCount(product: ProductModel) {
    product['count']--;

    if (product['count'] == 0) {
      var index = this.transaction.items.indexOf(product);
      this.transaction.items.splice(index, 1);
    }
  }

  addProduct(product: ProductModel): void {
    console.log(product);
    product['count'] = 1;
    this.transaction.items.push(product);
    this.showAutocomplete = false;
    this.searchProductString = '';
  }

  clear() {
    if (this.id == 'new') {
      this.transaction.items = [];
    }
    else {
      this.db.object('transactions/' + this.id).remove();

      this.router.navigate(['/me']);
    }
  }

  save() {
    console.log(this.transaction);

    this.transaction.creator = this.user.uid;
    this.transaction.created = moment().toISOString();


    if (this.new) {
      this.db.list('transactions').push(this.transaction);
    } else {
      this.db.object('transactions/' + this.id).set(this.transaction);
    }

    this.router.navigate(['/me']);
  }

  // TODO: Implement name querying
  getUserNameWithKey(creatorId: string) {
    if (this.user) {
      return this.user.displayName;
    }

    return "";
  }

  constructor(
    private db: AngularFireDatabase,
    private auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      if (user == null) {
        this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
          return;
      }

      this.user = user;
    });

    this.db.list<ProductModel>('data').valueChanges().subscribe(result => {
      this.products = result;
    });

    this.route.params.subscribe(params => {
      if (params.id && params.id != 'new') {
        this.id = params.id;
          // ToDo: Transaction laden
          this.db.object('transactions/' + params.id).valueChanges().subscribe((result: TransactionModel) => {
            console.log(result);
            this.transaction = result;
          });
      }

      if (params.id && params.id == 'new') {
        this.new = true;

        this.transaction = new TransactionModel();
        this.transaction.items = [];
      }

    });
  }

}
