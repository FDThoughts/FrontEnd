import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable()
export class AuthService {
    constructor(private service: LoginService,
        private router: Router
    ) {}
    authenticated: boolean = false;
    name: string;
    password: string;
    callbackUrl: string;

    login() : Observable<boolean> {
        this.authenticated = false;
        return this.service.login(
            this.name, this.password
        ).pipe(map(response => {
            console.log(response);
            if (response) {
                this.authenticated = true;
                this.password = null;
                this.router.navigateByUrl(
                    this.callbackUrl ||
                    '/admin/overview'
                );
            }
            return this.authenticated;
        }),
        catchError(e => {
            this.authenticated = false;
            return of(false);
        }));
    }

    logout() {
        this.authenticated = false;
        this.service.logout();
        this.router.navigateByUrl("/admin/login");
    }
}