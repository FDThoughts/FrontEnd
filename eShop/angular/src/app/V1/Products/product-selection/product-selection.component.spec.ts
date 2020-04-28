import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PRODUCT_API_URL_PROVIDER } from '../../../url-generator.provider';
import {
  FormsModule
} from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductSelectionComponent } from './product-selection.component';
import { ProductService } from '../product.service';
import { Cart } from '../../Cart/Models/cart.model';
import { CartService } from '../../Cart/cart.service';
import { SESSION_API_URL_PROVIDER } from '../../../url-generator.provider';
import {
  CartSummaryComponent
} from '../../Cart/cart-summary/cart-summary.component';
import {
  SearchComponent
} from '../search/search.component';

describe('ProductSelectionComponent', () => {
  let component: ProductSelectionComponent;
  let fixture: ComponentFixture<ProductSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductSelectionComponent,
        ProductListComponent,
        CartSummaryComponent,
        SearchComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule
      ],
      providers: [
        PRODUCT_API_URL_PROVIDER,
        ProductService,
        Cart,
        CartService,
        SESSION_API_URL_PROVIDER
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
