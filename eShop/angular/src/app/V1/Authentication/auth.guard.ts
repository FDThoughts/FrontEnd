import { Injectable } from '@angular/core';
import {
    Router, ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard {
    constructor(private router: Router,
        private authService: AuthService
    ) {}

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : boolean {
        if (this.authService.authenticated) {
            return true;
        } else {
            this.authService.callbackUrl = 
                route.url.toString();
            this.router.navigateByUrl(
                '/admin/login'
            );
            return false;
        }        
    }
}