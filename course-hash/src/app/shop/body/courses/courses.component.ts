import { Component, OnInit, NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { CurrentCartService } from '../common/current-cart.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

// @NgModule ({
//   imports: [
//     MatSliderModule,
//   ]
// })

export class CoursesComponent implements OnInit {

  cart_service:CurrentCartService;

  constructor(cart_service:CurrentCartService) {
    this.cart_service = cart_service;
   }

  ngOnInit(): void {
    // this.onSelectedFilter("low_to_high");
  }

  courseTitle: string ="Discover latest Courses on React";
  onSelectedFilter(event:any){

    let sort_type  = event.target.value;

    if(sort_type == "high_to_low"){

      this.cart_service.courses = this.cart_service.courses.sort((a:any,b:any)=> (parseFloat(a.final_price) < parseFloat(b.final_price) ? 1 : -1))
    }
    else{
      this.cart_service.courses = this.cart_service.courses.sort((a:any,b:any)=> (parseFloat(a.final_price) > parseFloat(b.final_price) ? 1 : -1))
    }

  }
}

