import { BaseModel } from './_base.model';

export class ListEntryModel extends BaseModel {
  id: string;
  count: number;

  constructor(data: any) {
    super();
    super.$map(this, data);
  }
}
