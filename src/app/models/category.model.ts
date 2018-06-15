
import { ProductModel } from './product.model';

export class CategoryModel {
  id: string;
  displayName: string;
  items: ProductModel[];
}
