import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { TransactionModel } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction-list-details',
  templateUrl: './transaction-list-details.component.html',
  styleUrls: ['./transaction-list-details.component.scss']
})
export class TransactionListDetailsComponent implements OnInit {

  id: String;
  transaction: TransactionModel;

  constructor(
    private db: AngularFireDatabase,
    private auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id && params.id != 'new') {
        this.id = params.id;
        this.db.object('transactions/' + params.id).valueChanges().subscribe((result: TransactionModel) => {
          console.log(result);
          this.transaction = result;
        });
      }
    });
  }
}
