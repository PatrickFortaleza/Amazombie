import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component'
import { CartContentComponent } from './cart-content/cart-content.component'

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'cart', component: CartContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
