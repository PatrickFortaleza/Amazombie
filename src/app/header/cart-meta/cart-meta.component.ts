import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'; 

interface AppState {
  cart: Array<Object>
}

@Component({
  selector: 'app-cart-meta',
  templateUrl: './cart-meta.component.html',
  styleUrls: ['./cart-meta.component.scss']
})
export class CartMetaComponent implements OnInit {

  cart$: Observable<Object>
  constructor(private store: Store<AppState>) { 
    this.cart$ = this.store.select('cart');
  }

  ngOnInit(): void {
  }

}
