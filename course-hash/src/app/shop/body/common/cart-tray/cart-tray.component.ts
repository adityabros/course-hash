import { Component, OnInit } from '@angular/core';
import { CurrentCartService } from '../current-cart.service';

@Component({
  selector: 'app-cart-tray',
  templateUrl: './cart-tray.component.html',
  styleUrls: ['./cart-tray.component.css']
})
export class CartTrayComponent implements OnInit {
  cart_items:any = [];
  cart_service:CurrentCartService;
  constructor(cart_service:CurrentCartService) {
    this.cart_service = cart_service;
   }
   subscription:any;
   total_cart_item_value:number = 0 ;

  ngOnInit(): void {
    this.cart_items = this.cart_service.cart_items;
    // this.total_cart_item_value = this.cart_service.total_cart_item_value;
    this.subscription=this.cart_service.changeInCart.subscribe(
      () => {
        this.total_cart_item_value = 0;
        this.cart_service.total_savings = 0;
        this.cart_items.forEach((cart_item:any) =>
                      {
                        // console.log(cart_item.actual_price);
                        if(cart_item.discounted_price){
                          this.total_cart_item_value+=parseInt(cart_item.discounted_price);
                          this.cart_service.total_savings += (cart_item.actual_price-cart_item.discounted_price);
                        }
                        else{
                          this.total_cart_item_value+=parseInt(cart_item.actual_price);
                        }
                        this.cart_service.total_cart_item_value = this.total_cart_item_value;

                        })
      }
    )
  }





}
