import { BaseModel } from './_base.model';

export class UserModel extends BaseModel {
  id: string;
  displayName: string;

  constructor(data: any) {
    super();
    super.$map(this, data);
  }
}
