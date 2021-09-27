import { Component, OnInit } from '@angular/core';
import { CurrentCartService } from '../common/current-cart.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cart_service:CurrentCartService;
  profile_data:any = {"displayname": "",
                "firstname": "",
                "lastname": "",
                "about_yourself": "",
                "student": "",
                "professional": "",
                "0_to_5": "",
                "5_to_10": "",
                "10_and_above": "",
                "java": "",
                "react": "",
                "backend": "",
                "role": ""};
  constructor(cart_service:CurrentCartService) {
    this.cart_service = cart_service;
   }

  ngOnInit(): void {
    // console.log("P data = ",this.cart_service.profile_data);
    // for(let key in this.cart_service.profile_data){
    //   Document.getElementById(key)=this.cart_service.profile_data[key];
    // }
    this.profile_data = this.cart_service.profile_data;
    // console.log("profile data = ",this.profile_data);
    for(let key in this.profile_data){

      (<HTMLInputElement>document.getElementById(key)).value = this.profile_data[key];
      // console.log("here")
    }
  }

  courseTitle:string = "Personal Profile of HashedIn University";

  onSubmit(submittedValue:any){
    if(submittedValue.invalid){
      alert("All Fields are required");
      return;
    }
    console.log("Submitted Value = ",submittedValue)
    this.cart_service.profile_data = submittedValue.value;
    this.profile_data = this.cart_service.profile_data;
    alert("Saved Successfully");
  }


}
