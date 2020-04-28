import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import {
  ProductSelectionComponent
} from './product-selection/product-selection.component';
import { 
  ProductListComponent 
} from './product-list/product-list.component';
import {
  CartModule
} from '../Cart/cart.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    ProductSelectionComponent,
    ProductListComponent,
    SearchComponent
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    CartModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductSelectionComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
