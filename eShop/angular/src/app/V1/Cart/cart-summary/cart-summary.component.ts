import { Component } from '@angular/core';
import { Cart } from '../Models/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {

  constructor(private cart: Cart) { }

  getItemCount(): number {
    return this.cart.itemCount;
  }

  getTotalPrice(): number {
    return this.cart.totalPrice;
  }
}
