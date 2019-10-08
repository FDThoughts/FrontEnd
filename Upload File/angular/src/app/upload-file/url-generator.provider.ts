import { InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

export const API_URL = 
    new InjectionToken<string>("API_URL");

export const API_URL_PROVIDER = {
    provide: API_URL,
    useValue: environment.apiUrl
}