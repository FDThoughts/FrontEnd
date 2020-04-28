import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Models/order.model';

@Component({
  selector: 'app-checkout-details',
  templateUrl: './checkout-details.component.html',
  styleUrls: ['./checkout-details.component.css']
})
export class CheckoutDetailsComponent {

  constructor(private router: Router,
    public order: Order) {
      if (order.getproducts().length == 0) {
        this.router.navigateByUrl('/cart');
      }
    }

}
