import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { reducer } from '../data/reducers/product.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { HamburgerComponent } from './header/hamburger/hamburger.component';
import { CartMetaComponent } from './header/cart-meta/cart-meta.component';
import { SubHeaderComponent } from './header/sub-header/sub-header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideComponent } from './carousel/slide/slide.component';
import { NextButtonComponent } from './carousel/next-button/next-button.component';
import { PrevButtonComponent } from './carousel/prev-button/prev-button.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { CardSpreadComponent } from './home-content/card-spread/card-spread.component';
import { CardComponent } from './home-content/card-spread/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { BrandComponent } from './footer/brand/brand.component';
import { FooterNavComponent } from './footer/footer-nav/footer-nav.component';
import { FooterSocialComponent } from './footer/footer-social/footer-social.component';
import { SubscribeComponent } from './footer/subscribe/subscribe.component';
import { FigureComponent } from './home-content/figure/figure.component';
import { TestimonialsComponent } from './home-content/testimonials/testimonials.component';
import { TestimonialComponent } from './home-content/testimonials/testimonial/testimonial.component';
import { ProductsComponent } from './products/products.component';


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
