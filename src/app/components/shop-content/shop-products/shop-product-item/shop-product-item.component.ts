import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../data/app.state';
import { Product } from '../../../../../data/models/product.model';
import { Products } from '../../../../../data/products/products';
import { Items } from '../../../../../data/products/lastItems';
import * as ProductActions from '../../../../../data/actions/product.actions'

@Component({
  selector: 'app-shop-product-item',
  templateUrl: './shop-product-item.component.html',
  styleUrls: ['./shop-product-item.component.scss']
})
export class ShopProductItemComponent implements OnInit {

  products: Product[] = Products

  addProduct($event) {
    let targetButton: HTMLElement = $event.target.closest('button');
    if(!targetButton) return null;
    let targetButtonId: Number = +targetButton.id;
    let result: Array<Product> = Products.filter((p) => {
      return p['id'] === targetButtonId
    })
    let targetProduct: Product = result[0]
    if(!targetProduct) return null;
    this.store.dispatch(new ProductActions.AddProduct(targetProduct))
  }


  constructor(private store: Store<AppState>) { 
    this.products.map((p) => {
      p.lastItems = Items[p.id]
    })
  }

  ngOnInit(): void {
  }

}
