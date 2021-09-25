import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentCartService {

  constructor() { }
  changeInCart = new Subject<void>();

  changed(){
    this.changeInCart.next();
  }


  cart_items:any = [];
}
