import { BaseModel } from './_base.model';

export class ProductModel extends BaseModel {
  id: string;
  basePrice: string;
  description: string;
  detailTitle: string;
  discount: number;
  formattedPrice: string;
  group: string;
  images: string[];
  klNr: string;
  price: number;
  subtitle: string;
  title: string;
  unit: string;
}
