import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../data/app.state';
import { Product } from '../../data/models/product.model'
import * as ProductActions from '../../data/actions/product.actions';
import { Observable } from 'rxjs';
import { Products } from '../../data/products/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

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

  ngOnInit(): void {
  }

}
