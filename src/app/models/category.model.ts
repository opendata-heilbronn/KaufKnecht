
import { ProductModel } from './product.model';
import { BaseModel } from './_base.model';

export class CategoryModel extends BaseModel {
  id: string;
  displayName: string;
  items: ProductModel[];

  constructor(data: any) {
    super();
    super.$map(this, data);
  }
}
