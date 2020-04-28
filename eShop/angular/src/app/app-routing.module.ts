import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ProductSelectionComponent 
} from './V1/Products/product-selection/product-selection.component';
import {
  CartDetailComponent
} from './V1/Cart/cart-detail/cart-detail.component';
import {
  CheckoutDetailsComponent
} from './V1/Checkout/checkout-details/checkout-details.component';
import {
  CheckoutPaymentComponent
} from './V1/Checkout/checkout-payment/checkout-payment.component';
import {
  CheckoutSummaryComponent
} from './V1/Checkout/checkout-summary/checkout-summary.component';
import {
  OrderConfirmationComponent
} from './V1/Checkout/order-confirmation/order-confirmation.component';

export const routes: Routes = [
  {
    path: 'admin', 
    loadChildren: () =>
      import('./V1/Admin/admin.module').then(
        module => module.AdminModule
      ),
  },
  {path: 'checkout/step1', component: CheckoutDetailsComponent},
  {path: 'checkout/step2', component: CheckoutPaymentComponent},
  {path: 'checkout/step3', component: CheckoutSummaryComponent},
  {path: 'checkout/confirmation', component: OrderConfirmationComponent},
  {path: 'checkout', redirectTo: '/checkout/step1', pathMatch: 'full'},
  {path: 'cart', component: CartDetailComponent},
  {path: 'product', component: ProductSelectionComponent},
  {path: '', redirectTo: '/product', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
