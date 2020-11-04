import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../../data/models/product.model';
import { AppState } from '../../../data/app.state';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  products: Observable<Array<Product>>;
  total: Observable<Number>;

  constructor(private store: Store<AppState>){
    this.products = store.select(AppState => AppState.product.cart);
    this.total = store.select(AppState => AppState.product.total);
  }

  ngOnInit(): void {
  }

}
