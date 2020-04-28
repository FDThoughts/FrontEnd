import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { 
  CheckoutDetailsComponent 
} from '../Checkout/checkout-details/checkout-details.component';
import { Order } from './Models/order.model';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CheckoutSummaryComponent } from './checkout-summary/checkout-summary.component';

@NgModule({
  declarations: [
    CheckoutDetailsComponent,
    CheckoutPaymentComponent,
    OrderConfirmationComponent,
    CheckoutSummaryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CheckoutDetailsComponent
  ],
  providers: [
    Order
  ]
})
export class CheckoutModule { }
