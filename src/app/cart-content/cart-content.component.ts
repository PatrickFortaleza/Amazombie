import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../data/models/product.model';
import { AppState } from '../../data/app.state';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.scss']
})
export class CartContentComponent implements OnInit {

  products: Observable<Array<Product>>;

  constructor(private store: Store<AppState>) { 
    this.products = store.select(AppState => AppState.product.cart);
  }

  ngOnInit(): void {
  }

}
