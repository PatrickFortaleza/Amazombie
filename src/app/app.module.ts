import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { reducer } from '../data/reducers/product.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header/header.component';
import { LogoComponent } from './components/global/header/logo/logo.component';
import { NavigationComponent } from './components/global/header/navigation/navigation.component';
import { HamburgerComponent } from './components/global/header/hamburger/hamburger.component';
import { CartMetaComponent } from './components/global/header/cart-meta/cart-meta.component';
import { SubHeaderComponent } from './components/global/header/sub-header/sub-header.component';
import { CarouselComponent } from './components/home-content/carousel/carousel.component';
import { SlideComponent } from './components/home-content/carousel/slide/slide.component';
import { NextButtonComponent } from './components/home-content/carousel/next-button/next-button.component';
import { PrevButtonComponent } from './components/home-content/carousel/prev-button/prev-button.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { CardSpreadComponent } from './components/home-content/card-spread/card-spread.component';
import { CardComponent } from './components/home-content/card-spread/card/card.component';
import { FooterComponent } from './components/global/footer/footer.component';
import { BrandComponent } from './components/global/footer/brand/brand.component';
import { FooterNavComponent } from './components/global/footer/footer-nav/footer-nav.component';
import { FooterSocialComponent } from './components/global/footer/footer-social/footer-social.component';
import { SubscribeComponent } from './components/global/footer/subscribe/subscribe.component';
import { FigureComponent } from './components/home-content/figure/figure.component';
import { TestimonialsComponent } from './components/home-content/testimonials/testimonials.component';
import { TestimonialComponent } from './components/home-content/testimonials/testimonial/testimonial.component';
import { ProductsComponent } from './components/home-content/products/products.component';
import { ProductItemComponent } from './components/home-content/products/product-item/product-item.component';
import { CartContentComponent } from './components/cart-content/cart-content.component';
import { ContentsComponent } from './components/cart-content/contents/contents.component';
import { PaymentInfoComponent } from './components/cart-content/payment-info/payment-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    HamburgerComponent,
    CartMetaComponent,
    SubHeaderComponent,
    CarouselComponent,
    SlideComponent,
    NextButtonComponent,
    PrevButtonComponent,
    HomeContentComponent,
    CardSpreadComponent,
    CardComponent,
    FooterComponent,
    BrandComponent,
    FooterNavComponent,
    FooterSocialComponent,
    SubscribeComponent,
    FigureComponent,
    TestimonialsComponent,
    TestimonialComponent,
    ProductsComponent,
    ProductItemComponent,
    CartContentComponent,
    ContentsComponent,
    PaymentInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      product: reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
