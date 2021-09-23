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
    TitleComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
