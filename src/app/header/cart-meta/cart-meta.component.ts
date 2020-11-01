import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, bindCallback } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { AppState } from '../../app.state';
import { map, filter, switchMap } from 'rxjs/operators'
import { Products } from 'src/data/products';


@Component({
  selector: 'app-cart-meta',
  templateUrl: './cart-meta.component.html',
  styleUrls: ['./cart-meta.component.scss']
})
export class CartMetaComponent implements OnInit, AfterViewInit {

  products: Observable<Product[]>;
  total: Observable<void>;
  data;

  constructor(private store: Store<AppState>){
    this.products = store.select('product');
  }

  getData(){
    this.products.subscribe(val => {
      console.log(val)
      this.data = val
    })
    return this.data;
  }

  async getTotal(){
    try {
      const result = await this.getData();
      if(!result) return null;
      this.total = result.reduce((a,b) => a + b.price, 0)
    } catch (err){
      console.log(err)
    }
    // let result = this.data.reduce((a,b) => a + b.price, 0);
    // this.total = result;
  }

  // getTotal(){
  //   console.log('got it')
  // }

  ngOnInit(): void {
    // this.total = this.products.pipe(map(arr => {arr.reduce((a,b) => a + b.price, 0)}))
    // console.log(this.total);
    this.getTotal();
  }

  ngAfterViewInit(): void {
    // console.log(this.getData())
  }

}
