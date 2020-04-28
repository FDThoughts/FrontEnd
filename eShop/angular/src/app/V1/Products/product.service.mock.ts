import { Injectable } from '@angular/core';
import { Product } from './Models/product.model';
import { Filter } from './Models/filter.model';

@Injectable()
export class ProductServiceMock {
    products: Product[];
    filter: Filter = new Filter();

    constructor() {}

    getProducts() {
        this.products = [
            {
                productId: 1,
                name: 'prod1',
                category: 'cat1',
                description: 'desc1',
                price: 100
            },
            {
                productId: 2,
                name: 'prod2',
                category: 'cat2',
                description: 'desc2',
                price: 50
            }
        ];
    }
}