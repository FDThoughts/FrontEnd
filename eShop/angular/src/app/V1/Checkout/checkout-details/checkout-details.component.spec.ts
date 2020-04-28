import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CheckoutDetailsComponent } from './checkout-details.component';
import { Order } from '../Models/order.model';
import { Cart } from '../../Cart/Models/cart.model';
import { CartService } from '../../Cart/cart.service';
import { SESSION_API_URL_PROVIDER } from '../../../url-generator.provider';

describe('CheckoutDetailsComponent', () => {
  let component: CheckoutDetailsComponent;
  let fixture: ComponentFixture<CheckoutDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutDetailsComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
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
    fixture = TestBed.createComponent(CheckoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
