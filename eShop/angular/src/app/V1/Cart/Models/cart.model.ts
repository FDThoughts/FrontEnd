import { Injectable } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../Products/Models/product.model';

@Injectable()
export class Cart {

    selections: ProductSelection[] = [];
    itemCount: number = 0;
    totalPrice: number = 0;

    constructor(private service: CartService) {
        service.getSessionData<ProductSelection[]>("cart")
            .subscribe(cartData => {
                if (cartData != null) {
                    cartData.forEach(item =>
                        this.selections.push(item)
                    );
                    this.update(false);
                }
            });
    }

    addProduct(product: Product) {
        let selection = this.selections
            .find(ps => ps.productId == 
                product.productId);
        if (selection) {
            let quantity = selection.quantity;
            selection.quantity = quantity + 1;
        } else {
            this.selections.push(
                new ProductSelection(
                    this,
                    product.productId,
                    product.name,
                    product.price,
                    1
                )
            );
        }
        this.update();
    }

    update(storeData: boolean = true) {
        this.itemCount = this.selections.map(
            ps => ps.quantity
        ).reduce((prev, curr) =>
            prev + curr, 0
        );
        this.totalPrice = this.selections.map(
            ps => ps.price * ps.quantity
        ).reduce((prev, curr) =>
            prev + curr, 0
        );
        if (storeData) {
            this.service.storeSessionData(
                "cart",
                this.selections.map(s => {
                    return {
                        productId: s.productId,
                        name: s.name,
                        price: s.price,
                        quantity: s.quantity
                    }
                })
            );
        }
    }

    updateQuantity(
        productId: number,
        quantity: number
    ) {
        if (quantity > 0) {
            let selection = this.selections
                .find(ps => ps.productId ==
                    productId);
            if (selection) {
                selection.quantity = quantity;
            } 
        } else {
            let index = this.selections
                .findIndex(ps => ps.productId
                    == productId);
            if (index != -1) {
                this.selections.splice(index, 1);
            }   
            this.update();         
        }        
    }
}

export class ProductSelection {

    constructor(
        public cart: Cart,
        public productId?: number,
        public name?: string,
        public price?: number,
        public quantity?: number
    ) {}
}