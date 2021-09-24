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



  ngOnInit(): void {
    this.cart_items = this.cart_service.cart_items;
  }





}
