import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LOGIN_API_URL } from '../../url-generator.provider';

const loginUrl = "account/login";
const logoutUrl = "account/logout";

@Injectable()
export class LoginService {

    constructor(private http: HttpClient,
        @Inject(LOGIN_API_URL) private apiUrl) { }

    login(name: string,
        password: string
    ) : Observable<boolean> {
        let url = this.apiUrl + loginUrl;
        console.log(url);
        let options =
            {
                withCredentials: true,
            }
        ;
        return this.http.post<boolean>(
            url,
            {
                name: name,
                password: password
            },
            options
        );
    }

    logout() {
        let url = this.apiUrl + logoutUrl;
        this.http.post(url, null)
            .subscribe(() => {});
    }
}