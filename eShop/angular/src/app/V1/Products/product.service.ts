import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PRODUCT_API_URL } from '../../url-generator.provider';
import { Product } from './Models/product.model';
import { Filter } from './Models/filter.model';

const productUrl = "v1/Product";

@Injectable()
export class ProductService {
    products: Product[];
    filter: Filter = new Filter();

    constructor(private http: HttpClient,
        @Inject(PRODUCT_API_URL) private apiUrl) {
            this.getProducts();
        }

    getProducts() {
        let url = this.apiUrl + productUrl;
        this.http.get<Product[]>(url)
            .subscribe(p => {
                this.products = p;
            });
    }
}