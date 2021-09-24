import { Component, OnInit } from '@angular/core';
import { CurrentCartService } from '../../body/common/current-cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  totalCartItems:any=[];
  cart_service:CurrentCartService;
  constructor(cart_service:CurrentCartService) {
    this.cart_service = cart_service;
   }


  ngOnInit(): void {
    this.totalCartItems = this.cart_service.cart_items.length;
  }
  // totalCartItems = this.cart_service.cart_items.length;

  menus = [
    {
      "label":"COURSES",
      "url":"/",
      "image_available":false,
    },
    {
      "label":"MY WISHLIST",
      "url":"/wishlist",
      "image_available":false,
    },
    {
      "label":"Cart",
      "img":"assets/shopping-cart.svg",
      "url":"/cart",
      "image_available":true,
    },
    {
      "label":"Profile",
      "img":"assets/noun_profile_2068277.svg",
      "url":"/profile",
      "image_available":true,
    },

  ]

}
