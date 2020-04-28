import { Location } from '@angular/common';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
    PRODUCT_API_URL_PROVIDER,
    SESSION_API_URL_PROVIDER,
    LOGIN_API_URL_PROVIDER 
} from './url-generator.provider';
import { 
    ProductsModule
} from './V1/Products/products.module';
import {
    CartModule
} from './V1/Cart/cart.module';
import {
    CheckoutModule
} from './V1/Checkout/checkout.module';

describe('Router: App', () => {

    let location: Location;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes),
                HttpClientModule,
                ProductsModule,
                CartModule,
                CheckoutModule
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                Location,
                PRODUCT_API_URL_PROVIDER,
                SESSION_API_URL_PROVIDER,
                LOGIN_API_URL_PROVIDER
            ]
        }).compileComponents();

        router = TestBed.get(Router);
        location = TestBed.get(Location);
    });

    it('fakeAsync works', fakeAsync(() => {
        const promise = new Promise(resolve => {
            setTimeout(resolve, 10);
        });
        let done = false;
        promise.then(() => done = true);
        tick(50);
        expect(done).toBeTruthy();
    }));
});
