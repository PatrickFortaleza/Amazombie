import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './components/home-content/home-content.component'
import { CartContentComponent } from './components/cart-content/cart-content.component'
import { ShopContentComponent } from './components/shop-content/shop-content.component'

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'cart', component: CartContentComponent },
  { path: 'shop', component: ShopContentComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
