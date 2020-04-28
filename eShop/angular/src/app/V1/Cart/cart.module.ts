import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Cart } from './Models/cart.model';
import { CartService } from './cart.service';
import { 
  CartSummaryComponent
} from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import {
  CheckoutModule
} from '../Checkout/checkout.module';

@NgModule({
  declarations: [
    CartSummaryComponent,
    CartDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    CheckoutModule
  ],
  exports: [
    CartSummaryComponent
  ],
  providers: [
    Cart,
    CartService
  ]
})
export class CartModule { }
