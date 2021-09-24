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


  cart_items:any = [
    {

        "tags": [
          "accusantium",
          "suscipit",
          "adipisci"
      ],
      "details": "Incidunt enim veniam. Id fugit odit ipsam et iusto esse est dignissimos eum. Totam ut est nobis consequatur aut consequuntur. Et nesciunt tempore. Eius blanditiis et minima adipisci est dolorum itaque omnis quidem.\n \rInventore vel aperiam necessitatibus consequuntur tempora est est repudiandae quas. Quis natus eos accusantium eaque quaerat tempora suscipit sed. Deserunt voluptatem eius consequatur reiciendis quisquam iure. Totam aut odit eum incidunt suscipit.\n \rEum ut neque et molestiae vel repellat rerum distinctio tempora. Mollitia doloremque nisi nemo eum. Est voluptate aut perferendis consequatur et et. Natus qui voluptatem quia.",
      "description": "Tempore sed unde laboriosam qui consequatur rem.",
      "discounted_price": null,
      "actual_price": "840.00",
      "author": "Arthur Hansen",
      "title": "doloribus sapiente facere sit laborum qui",
      "id": "1"
    }
  ]
}
