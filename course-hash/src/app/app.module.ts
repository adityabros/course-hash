import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { HeadNavComponent } from './shop/head-nav/head-nav.component';
import { LogoComponent } from './shop/head-nav/logo/logo.component';
import { MenuComponent } from './shop/head-nav/menu/menu.component';
import { CoursesComponent } from './shop/body/courses/courses.component';
import { WishlistComponent } from './shop/body/wishlist/wishlist.component';
import { CartComponent } from './shop/body/cart/cart.component';
import { ProfileComponent } from './shop/body/profile/profile.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './shop/body/common/title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesItemsComponent } from './shop/body/common/courses-items/courses-items.component';
import { CartTrayComponent } from './shop/body/common/cart-tray/cart-tray.component';
import { ModalComponent } from './shop/body/cart/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeadNavComponent,
    LogoComponent,
    MenuComponent,
    CoursesComponent,
    WishlistComponent,
    CartComponent,
    ProfileComponent,
    TitleComponent,
    CoursesItemsComponent,
    CartTrayComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: CoursesComponent},
      {path: 'wishlist', component: WishlistComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'cart', component: CartComponent},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
