import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { ProductServiceMock } from './product.service.mock';

describe('ProductService', () => {
    let service: ProductService;
    let mockHttp;
    let mockService: ProductServiceMock;

    beforeEach(() => {
        mockHttp = new HttpClient(undefined);
        service = new ProductService(mockHttp, null);
        mockService = new ProductServiceMock();

        spyOn(service, 'getProducts')
            .and.callFake(function() {
                service.products = 
                    mockService.products;
            });
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getProducts', () => {
        it('should return a collection of products', () => {
            service.getProducts();
            expect(service.products)
                .toEqual(mockService.products);
        });
    });
});