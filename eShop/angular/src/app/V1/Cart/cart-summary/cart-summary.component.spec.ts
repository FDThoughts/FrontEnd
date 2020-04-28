import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Cart } from '../Models/cart.model';
import { CartService } from '../cart.service';
import { CartSummaryComponent } from './cart-summary.component';
import { SESSION_API_URL_PROVIDER } from '../../../url-generator.provider';

describe('CartSummaryComponent', () => {
  let component: CartSummaryComponent;
  let fixture: ComponentFixture<CartSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSummaryComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        Cart,
        CartService,
        SESSION_API_URL_PROVIDER
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
