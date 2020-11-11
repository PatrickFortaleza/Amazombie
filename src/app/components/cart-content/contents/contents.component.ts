import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../../../data/models/product.model';
import { AppState } from '../../../../data/app.state';
import * as ProductActions from '../../../../data/actions/product.actions';
import { Products } from '../../../../data/products/products';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  products: Observable<Array<Product>>;
  total: Observable<number>;
  subtotal: Observable<number>;
  shipping: Observable<number>;
  tax: Observable<number>; 
  isEmpty: Boolean;

  constructor(private store: Store<AppState>){
    this.products = store.select(AppState => AppState.product.cart);
    this.total = store.select(AppState => AppState.product.total);
    this.subtotal = store.select(AppState => AppState.product.subtotal);
    this.shipping = store.select(AppState => AppState.product.shipping);
    this.tax = store.select(AppState => AppState.product.tax);
  }

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

  removeProduct($event){
    let targetButton: HTMLElement = $event.target.closest('button');
    if(!targetButton) return null;
    let targetButtonId: number = +targetButton.id;
    this.store.dispatch(new ProductActions.DecProduct(targetButtonId))
  }

  deleteProduct($event){
    let targetButton: HTMLElement = $event.target.closest('a');
    if(!targetButton) return null;
    let targetButtonId: number = +targetButton.id;
    this.store.dispatch(new ProductActions.DelProduct(targetButtonId))
  }

  ngOnInit(): void {
    const result = this.products.pipe(isEmpty());
    console.log(result);
    // result.subscribe(x => this.isEmpty = x);
  }

}
