import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivateChild {

    constructor(private router: Router, private authenticationService: AuthenticationService) {
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authenticationService.isConnected()) {
            this.router.navigate(['/']);
            return false;
        } else {
            return true;
        }
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authenticationService.isConnected()) {
            this.router.navigate(['/']);
            return false;
        } else {
            return true;
        }
    }
}
