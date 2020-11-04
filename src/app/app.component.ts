import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../data/app.state';
import * as ProductActions from '../data/actions/product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'amazombie';

  constructor(private store: Store<AppState>){}

  ngOnInit() :void {
    this.store.dispatch(new ProductActions.InitCart)
  }

}
