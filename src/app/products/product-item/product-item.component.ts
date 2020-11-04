import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../data/app.state';
import { Product } from '../../../data/models/product.model'
import * as ProductActions from '../../../data/actions/product.actions';
import { Products } from '../../../data/products/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

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
    // this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) )
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }

}
