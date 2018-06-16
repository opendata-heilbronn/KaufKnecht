
import { ProductModel } from './product.model';
import { BaseModel } from './_base.model';

export class TransactionModel extends BaseModel {
  creator: string; // id des users
  created: Date;

  executor: string;

  provision: number;
  claimed: Date;

  receiptImage: string;
  receiptDate: Date;

  delivered: Date;

  ratingCreator: number;
  ratingExecutor: number;

  items: ProductModel[];
}
