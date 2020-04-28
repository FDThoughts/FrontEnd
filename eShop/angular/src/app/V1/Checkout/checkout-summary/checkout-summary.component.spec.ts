import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CheckoutSummaryComponent } from './checkout-summary.component';
import { Order } from '../Models/order.model';
import { Cart } from '../../Cart/Models/cart.model';
import { CartService } from '../../Cart/cart.service';
import { SESSION_API_URL_PROVIDER } from '../../../url-generator.provider';

describe('CheckoutSummaryComponent', () => {
  let component: CheckoutSummaryComponent;
  let fixture: ComponentFixture<CheckoutSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutSummaryComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers: [
        Order,
        Cart,
        CartService,
        SESSION_API_URL_PROVIDER
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
