import { Component, OnInit } from '@angular/core';
import { CurrentCartService } from '../common/current-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart_items:any = [];
  cart_service:CurrentCartService;
  courses:any;
  total_cart_item_value:number = 1 ;
  subscription:any;

  constructor(cart_service:CurrentCartService) {
    this.cart_service = cart_service;
    this.total_cart_item_value = this.cart_service.total_cart_item_value;
   }



  ngOnInit(): void {
    this.courses = this.cart_service.cart_items;
    this.cart_items = this.cart_service.cart_items;
    // this.total_cart_item_value = this.cart_service.total_cart_item_value;

    // this.subscription=this.cart_service.changeInCart.subscribe(
    //   () => {
    //     this.cart_items.forEach((cart_item:any) =>
    //                   {
    //                     console.log(cart_item.actual_price);
    //                     // alert("called here")
    //                     this.total_cart_item_value+=parseInt(cart_item.actual_price);
    //                     // alert(this.total_cart_item_value)
    //                     })
    //   }
    // )

  }

  courseTitle = "Below are the items in your Cart";

  showModal: boolean = false;
  toggleModal(): void{
    this.showModal = !this.showModal;
    console.log(this.showModal)
  }

}
