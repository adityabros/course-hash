import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CurrentCartService } from '../../../common/current-cart.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  id: any;
  cart_service:CurrentCartService;
  curr_item:any;
  courses:any;
  constructor(private route: ActivatedRoute,cart_service:CurrentCartService) {
    this.cart_service = cart_service;
    this.courses = this.cart_service.courses;
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    for(let i=0;i<this.cart_service.courses.length;i++){
      let item_id = this.cart_service.courses[i].id;
      if(item_id == this.id){
        // alert(item_id)
        this.curr_item = this.cart_service.courses[i];
      }
    }
  }
  add_to_cart(id_of_item:string){
    console.log(id_of_item);
    var n = this.cart_service.cart_items.length;
    for(var i =0;i<n;i++){
      let curr_item = this.cart_service.cart_items[i];
      if(curr_item.id == (id_of_item)){
        alert("Item Already Exists");
        return;
      }
    }
    n = this.courses.length;
    for(var i =0;i<n;i++){
      let curr_item = this.cart_service.courses[i];
      if(curr_item.id == (id_of_item)){
        this.cart_service.cart_items.push(this.courses[i])
        break;
      }
    }

    this.cart_service.changed();
    alert("Item Successfully added in Cart");

}

add_wishlist(id_of_item:string){
  // // .classList.add("wishlist_added");
  // var slides = document.getElementsByClassName("wishlist_of_product");
  // for (var i = 0; i < slides.length; i++) {
  //   console.log(slides.item(i));
  // }
  console.log("Wishlist = ",id_of_item);
  var n = this.cart_service.wishlist_items.length;
    for(var i =0;i<n;i++){
      let curr_item = this.cart_service.wishlist_items[i];
      if(curr_item.id == parseInt(id_of_item)){
        alert("Item Already Exists in Wishlist");
        return;
      }
    }
    n = this.courses.length;
    for(var i =0;i<n;i++){
      let curr_item = this.cart_service.courses[i];
      if(curr_item.id == (id_of_item)){
        this.cart_service.wishlist_items.push(this.courses[i]);
        break;
      }
    }

  alert("Item Successfully added in Wishlist");

}
  courseTitle = "";

}
