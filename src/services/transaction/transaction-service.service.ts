import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TransactionModel } from '../../app/models/transaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private db: AngularFireDatabase) {
  }

  // Promise<<TransactionModel>[]>
  getTransactions() {
    let transactions: TransactionModel[] = [];
    let observable = Observable.create(observer => {
      this.db.database.ref().child('data').on('child_added', (snapshot) => {

      });
    });
  }
}
