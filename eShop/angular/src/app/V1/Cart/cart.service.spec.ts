import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';
import { CartServiceMock } from './cart.service.mock';

describe('CartService', () => {
    let service: CartService;
    let mockHttp;
    let mockService: CartServiceMock;

    beforeEach(() => {
        mockHttp = new HttpClient(undefined);
        service = new CartService(mockHttp, null);
        mockService = new CartServiceMock();

        spyOn(service, 'getSessionData')
            .and.callFake(function<T>() : Observable<T> {
                return mockService.getSessionData<T>("");
            });

        spyOn(service, 'storeSessionData')
        .and.callFake(function<T>() {
            return mockService.storeSessionData<T>("", null);
        });
    });
});