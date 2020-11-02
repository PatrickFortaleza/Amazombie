import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, bindCallback } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { AppState } from '../../app.state';


@Component({
  selector: 'app-cart-meta',
  templateUrl: './cart-meta.component.html',
  styleUrls: ['./cart-meta.component.scss']
})
export class CartMetaComponent implements OnInit, AfterViewInit {

  products: Observable<Array<Product>>;
  total: Observable<Number>;

  constructor(private store: Store<AppState>){
    this.total = store.select(AppState => AppState.product.total);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
