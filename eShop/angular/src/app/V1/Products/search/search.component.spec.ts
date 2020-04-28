import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { 
  HttpClientTestingModule 
} from '@angular/common/http/testing';
import { SearchComponent } from './search.component';
import { ProductService } from '../product.service';
import { ProductServiceMock } from '../product.service.mock';

import { 
  PRODUCT_API_URL_PROVIDER
} from '../../../url-generator.provider';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: ProductService;
  let mockHttp;
  let mockService: ProductServiceMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [
        ProductService,
        PRODUCT_API_URL_PROVIDER
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockHttp = new HttpClient(undefined);
    service = new ProductService(mockHttp, null);
    mockService = new ProductServiceMock();

    spyOn(service, 'getProducts')
        .and.callFake(function() {
            service.products = 
                mockService.products;
        });
    service.filter.search = "prod";
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clear', () => {
    it('should return a collection of products', () => {
      component.clear();
      expect(component.searchLabel)
        .toEqual("");
    });
  });
});
