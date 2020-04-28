import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { PRODUCT_API_URL_PROVIDER } from '../../../url-generator.provider';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../product.service';
import { ProductServiceMock } from '../product.service.mock';
import { CartService } from '../../Cart/cart.service';
import { CartServiceMock } from '../../Cart/cart.service.mock';
import { Cart } from '../../Cart/Models/cart.model';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let mockService: ProductServiceMock;
  let mockHttp;
  let mockCartService : CartServiceMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports: [HttpClientModule],
      providers: [
        PRODUCT_API_URL_PROVIDER,
        {
          provide: ProductService,
          useClass: ProductServiceMock
        },
        {
          provide: CartService,
          useClass: CartServiceMock
        },
        Cart
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    mockHttp = new HttpClient(undefined);
    mockService = new ProductServiceMock();
    mockCartService = new CartServiceMock();
    let cartService = new CartService(
      mockHttp, null
    );

    spyOn(cartService, 'getSessionData')
      .and.callFake(function<T>() : Observable<T> {
          return mockCartService.getSessionData<T>("");
      });

    spyOn(cartService, 'storeSessionData')
      .and.callFake(function<T>() {
        return mockCartService.storeSessionData<T>("", null);
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getProducts', () => {
    it('should return a collection of tasks', () => {
        expect(component.getProducts())
            .toEqual(mockService.products);
    });
  });
});
