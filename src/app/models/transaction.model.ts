
import { ListEntryModel } from './list-entry.model';

export class TransactionModel {
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

  items: ListEntryModel[];
}
