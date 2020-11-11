import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../data/app.state';
import { Product } from '../../../../../data/models/product.model';
import { Products } from '../../../../../data/products/products';
import {  Items } from '../../../../../data/products/lastItems';

@Component({
  selector: 'app-shop-product-item',
  templateUrl: './shop-product-item.component.html',
  styleUrls: ['./shop-product-item.component.scss']
})
export class ShopProductItemComponent implements OnInit {

  products: Product[] = Products

  constructor(private store: Store<AppState>) { 
    this.products.map((p) => {
      p.lastItems = Items[p.id]
    })
  }

  ngOnInit(): void {
  }

}
