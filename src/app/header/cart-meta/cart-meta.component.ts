import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs'; 
import { take } from 'rxjs/operators';

interface AppState {
  cart: Array<Object>
}

@Component({
  selector: 'app-cart-meta',
  templateUrl: './cart-meta.component.html',
  styleUrls: ['./cart-meta.component.scss']
})
export class CartMetaComponent implements OnInit {

  cart$: Array<Object>
  
  constructor(private store: Store<AppState>) { 
    // this.cart$ = this.store.select(AppState => AppState.cart);
    let state: Array<Object>;

    store.select('cart').pipe(take(1)).subscribe(s => state = s);
    this.cart$ = state; 
    console.log(Array.from(this.cart$));
  }

  ngOnInit(): void {
    console.log(this.cart$);
  }

}
