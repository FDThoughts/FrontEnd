import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
  ErrorHandlerService
} from './V1/errorHandler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule
  ],
  providers: [
    PRODUCT_API_URL_PROVIDER,
    SESSION_API_URL_PROVIDER,
    LOGIN_API_URL_PROVIDER,
    ErrorHandlerService,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: ErrorHandlerService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
