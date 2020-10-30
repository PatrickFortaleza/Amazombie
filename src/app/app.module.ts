import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    NextButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
