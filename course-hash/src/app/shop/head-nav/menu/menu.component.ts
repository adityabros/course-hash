import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menus = [
    {
      "label":"COURSES",
      "url":"/"
    },
    {
      "label":"MY WISHLIST",
      "url":"/wishlist"
    },
    {
      "label":"Cart",
      "img":"assets/shopping-cart.svg",
      "url":"/cart"
    },
    {
      "label":"Profile",
      "img":"assets/noun_profile_2068277.svg",
      "url":"/profile"
    },

  ]

}
