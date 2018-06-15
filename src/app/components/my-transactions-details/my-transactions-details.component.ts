import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { ListEntryModel } from '../../models/list-entry.model';

@Component({
  selector: 'app-my-transactions-details',
  templateUrl: './my-transactions-details.component.html',
  styleUrls: ['./my-transactions-details.component.scss']
})
export class MyTransactionsDetailsComponent implements OnInit {

  private mockItems: ListEntryModel[] = [];
  private mockItem: ProductModel = new ProductModel(null);
  itemList: any[] = [];


  getProductByID(id: string): ProductModel {
    if (id == "1") {
      return this.mockItem;
    }
    else return null;
  }

  constructor(private route: ActivatedRoute) {

    //mock data
    this.mockItem.id = "1";
    this.mockItem.description = "z.B. Rittersporn oder Löwenmäulchen, Topf: 13 cm ø";
    this.mockItem.title = "VitaSafe Melonen-Mix";
    this.mockItem.images = ["https://media.kaufland.com/images/PPIM/Lago/c16221167_6.jpg"];

    this.mockItems.push(new ListEntryModel(null));
    this.mockItems[0].id = "1";
    this.mockItems[0].count = 5;

    this.route.params.subscribe(params => {
      console.log(params);
    });
  }

  ngOnInit() {
    this.mockItems.forEach(item => {
      let pm: any = this.getProductByID(item.id);
      pm.count = item.count;
      this.itemList.push(pm);
    });
  }

}
