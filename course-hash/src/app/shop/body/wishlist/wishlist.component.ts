import { Component, OnInit } from '@angular/core';
import { CurrentCartService } from '../common/current-cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistItems:any = [];
  cart_service:CurrentCartService;

  constructor(cart_service:CurrentCartService) {
    this.cart_service = cart_service;
   }

  ngOnInit(): void {
    this.wishlistItems = this.cart_service.wishlist_items;
  }
  add_to_cart(id_of_item:string){

    console.log(id_of_item);
      var n = this.cart_service.cart_items.length;
      for(var i =0;i<n;i++){
        let curr_item = this.cart_service.cart_items[i];
        if(curr_item.id == parseInt(id_of_item)){
          alert("Item Already Exists");
          return;
        }
      }
      this.cart_service.cart_items.push(this.cart_service.courses[parseInt(id_of_item)-1])
      this.cart_service.changed();
      alert("Item Successfully added in Cart");

  }
  remove_from_wishlist(id_of_item:string){

    var n = this.cart_service.wishlist_items.length;
      for(var i =0;i<n;i++){
        let curr_item = this.cart_service.wishlist_items[i];
        if(curr_item.id == parseInt(id_of_item)){
          this.cart_service.wishlist_items.splice(i,1);
          alert("Item Removed from Wishlist");
          return;
        }
      }

  }
  courseTitle:string = "All your Wishlists";
}
