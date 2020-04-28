import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable()
export class CartServiceMock {
   
    constructor() {
    }

    storeSessionData<T>(dataType: string, data: T) {
        return from([]).subscribe(() => {});
    }

    getSessionData<T>(dataType: string): Observable<T> {
        return from([]);
    }
}