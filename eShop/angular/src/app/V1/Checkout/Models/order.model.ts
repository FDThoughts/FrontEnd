import { Injectable } from '@angular/core';
import { Cart } from '../../Cart/Models/cart.model';

@Injectable()
export class Order {

    name: string;
    address: string;
    submitted: boolean = false;
    payment: Payment = new Payment();
    
    constructor(
        public cart: Cart
    ) {
        
    }

    getproducts(): CartLine[] {
        return this.cart.selections
         .map(p => new CartLine(
             p.productId, p.quantity
         ));
    }

    submit() {
        this.submitted = true;
    }
}

export class Payment {
    cardNumber: string;
    cardExpiry: string;
    cardSecurityCode: string;
}

export class CartLine {
    constructor(
        private productId: number,
        private quantity: number
    ) {}
}