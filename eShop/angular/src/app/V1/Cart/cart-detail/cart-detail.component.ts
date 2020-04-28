import { Component } from '@angular/core';
import { Cart } from '../Models/cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent {

  constructor(public cart: Cart) { }

}
