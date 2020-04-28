import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Models/order.model';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.css']
})
export class CheckoutPaymentComponent {

  constructor(private router: Router,
    public order: Order) { 
      if (order.name == null ||
        order.address == null
      ) {
          router.navigateByUrl('/checkout/step1');
      }
    }

}
