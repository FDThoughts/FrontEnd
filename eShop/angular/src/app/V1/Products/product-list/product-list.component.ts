import { Component } from '@angular/core';
import { Product } from '../Models/product.model';
import { ProductService } from '../product.service';
import { Cart } from '../../Cart/Models/cart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private service: ProductService,
    private cart: Cart) { }

  getProducts(): Product[] {
    if (this.service.products != null &&
      this.service.products.length > 0)
      {
        return this.service.products;
      }
  }

  addToCart(product: Product) {
    this.cart.addProduct(product);
  }
}
