import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  HttpClientTestingModule 
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthComponent } from './auth.component';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';
import { 
  LOGIN_API_URL_PROVIDER

} from '../../../url-generator.provider';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        AuthService,
        LoginService,
        LOGIN_API_URL_PROVIDER        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
