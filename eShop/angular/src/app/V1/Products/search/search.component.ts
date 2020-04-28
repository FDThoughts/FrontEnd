import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchLabel: string;

  constructor(private service: ProductService) { 
      this.clear();
  }

  clear() {
    this.searchLabel = '';
    this.service.getProducts();
  }

  getSearchItems() {
      if (this.service.filter.search)
      {
          let lowerTerm = 
              this.service.filter.search.toLowerCase();
          let result = this.service.products.filter(p =>
              p.name.toLowerCase().includes(lowerTerm) ||
              p.description.toLowerCase().includes(lowerTerm)
          );
          if (result != null &&
              result.length > 0)
          {
              let itemCount = 
                  result.length;
              if (itemCount != 0) {                            
                  let totalPrice = result.map(
                      d => d.price
                  ).reduce((prev, curr) =>
                      prev + curr, 0
                  );
                  this.searchLabel = itemCount + 
                      ' product(s), total price is CAD$' +
                      totalPrice;
              } else {
                  this.clear();
              }
          } else {
              this.searchLabel = 'No products found';
          }
          
      } else {
          this.clear();
      }
  }

}
