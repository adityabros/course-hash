import { Component, OnInit, NgModule, Input } from '@angular/core';
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
  noItemsToDisplay:Boolean;
  constructor(cart_service:CurrentCartService) {
    this.cart_service = cart_service;
    this.noItemsToDisplay = false;
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
  filterCourses(event:any){
    // console.log("Search = ",event)
    let input_value = (event.target.value);
    console.log("input Value = ",input_value);
    let n = this.cart_service.courses.length;
    let count = 0;
    for(let i=0;i<n;i++){
      let txtValue = this.cart_service.courses[i].title;
      // console.log("Txt Value = ",txtValue," index of = ",txtValue.toUpperCase().indexOf(input_value.toUpperCase));
      if (txtValue.toUpperCase().indexOf(input_value.toUpperCase()) > -1) {
        this.cart_service.courses[i].display = true;
        count++;
      } else {
        this.cart_service.courses[i].display = false;
        // console.log("here");
      }

    }
    if(count === 0){
      this.noItemsToDisplay = true;
    }
    else{
      this.noItemsToDisplay = false;
    }

  }
}

