import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'; 

interface AppState {
  cart: Array<Object>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amazombie';

  cart$: Observable<Array<Object>>
  constructor(private store: Store<AppState>){
    this.cart$ = this.store.select('cart');
  }


  // spanishMessage(){
  //   this.store.dispatch({type: 'SPANISH'})
  // }

  // frenchMessage(){
  //   this.store.dispatch({type: 'FRENCH'})
  // }
}
