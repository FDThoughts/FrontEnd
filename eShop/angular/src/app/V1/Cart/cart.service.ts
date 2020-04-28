import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SESSION_API_URL } from '../../url-generator.provider';

const sessionUrl = "v1/Session";

@Injectable()
export class CartService {

    url;

    constructor(private http: HttpClient,
        @Inject(SESSION_API_URL) private apiUrl) {
            this.url = this.apiUrl + sessionUrl;
        }

    storeSessionData<T>(dataType: string, data: T) {        
        return this.http.post(
            this.url + '/' + dataType, 
            data
        ).subscribe(() => {
        });
    }

    getSessionData<T>(dataType: string): Observable<T> {
        return this.http.get<T>(
            this.url + '/' + dataType
        );
    }
}