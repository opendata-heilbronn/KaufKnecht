import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class RatingServiceService {

  constructor(db: AngularFireDatabase) {
  }
}
