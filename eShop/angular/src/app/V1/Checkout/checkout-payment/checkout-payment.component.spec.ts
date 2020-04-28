import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CheckoutPaymentComponent } from './checkout-payment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Order } from '../Models/order.model';
import { Cart } from '../../Cart/Models/cart.model';
import { CartService } from '../../Cart/cart.service';
import { SESSION_API_URL_PROVIDER } from '../../../url-generator.provider';

describe('CheckoutPaymentComponent', () => {
  let component: CheckoutPaymentComponent;
  let fixture: ComponentFixture<CheckoutPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutPaymentComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
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
    fixture = TestBed.createComponent(CheckoutPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
