import { InjectionToken } from '@angular/core';
import {
    environment
} from '../environments/environment';

export const PRODUCT_API_URL = 
    new InjectionToken<string>("PRODUCT_API_URL");

export const PRODUCT_API_URL_PROVIDER = {
    provide: PRODUCT_API_URL,
    useValue: environment.productApiUrl
}

export const SESSION_API_URL = 
    new InjectionToken<string>("SESSION_API_URL");

export const SESSION_API_URL_PROVIDER = {
    provide: SESSION_API_URL,
    useValue: environment.sessionApiUrl
}

export const LOGIN_API_URL = 
    new InjectionToken<string>("LOGIN_API_URL");

export const LOGIN_API_URL_PROVIDER = {
    provide: LOGIN_API_URL,
    useValue: environment.loginApiUrl
}