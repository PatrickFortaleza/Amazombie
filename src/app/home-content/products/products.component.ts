import { Component, OnInit } from '@angular/core';
import { Products } from '../../../data/products';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'; 
import { add } from './products.actions';

interface AppState {
  cart: Array<Object>
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  cart$: Observable<Array<Object>>

  constructor(private store: Store<{ cart: Array<Object>}>) {
    this.cart$ = this.store.select('cart');
  }

  addProduct($event){
    let targetButton: HTMLElement = $event.target.closest('button');
    if(!targetButton) return null;
    let targetButtonId: Number = +targetButton.id;
    let result: Object = Products.filter((p) => {
      return p['id'] === targetButtonId
    })
    let targetProduct: Object = result[0];
    if(!targetProduct) return null;

    this.store.dispatch(add({ item: targetProduct }));
    
  }

  ngOnInit(): void {
    console.log(Products);
  }

}
