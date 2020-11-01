import { Component, OnInit } from '@angular/core';
import { Products } from '../../../data/products';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'; 
import { add } from './products.actions';

interface AppState {
  products: Array<Object>
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Array<Object>>

  constructor(private store: Store<{ products: Array<Object>}>) {
    this.products$ = this.store.select('products');
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

    // this.store.dispatch({
    //   type: 'ADD',
    //   props: 
    // })
    this.store.dispatch(add({ item: targetProduct }));
    
  }

  ngOnInit(): void {
    console.log(Products);
  }

}
