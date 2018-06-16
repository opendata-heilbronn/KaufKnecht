import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionModel } from './../../models/transaction.model';
import { ProductModel } from '../../models/product.model';
import { ListEntryModel } from '../../models/list-entry.model';
import { AngularFireDatabase } from 'angularfire2/database';

import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-my-transactions-details',
  templateUrl: './my-transactions-details.component.html',
  styleUrls: ['./my-transactions-details.component.scss']
})
export class MyTransactionsDetailsComponent implements OnInit {

  id: string;
  transaction: TransactionModel;
  products: ProductModel[];

  searchProductString: string = '';
  showAutocomplete: boolean = false;

  getProducts() {
    if (this.products == null)
      return [];

    return this.products.filter(m => {
      return m.title && m.title.toLowerCase().indexOf(this.searchProductString.toLowerCase()) > -1;
    }).slice(0, 20);

  }

  addProduct(product: ProductModel): void {
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
    if (this.id == 'new') {
      this.db.list('transactions').push(this.transaction);
    } else {
      this.db.object('transactions/' + this.id).set(this.transaction);
    }

    this.router.navigate(['/me']);
  }

  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

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
        this.transaction = new TransactionModel();
        this.transaction.creator = '123';
        this.transaction.created = new Date();
        this.transaction.items = [];
      }

    });
  }

}
