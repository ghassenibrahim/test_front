/*import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({providedIn: 'root'})
export class SecuredGuard implements CanActivateChild {

    constructor(private router: Router, private authenticationService: AuthenticationService) {
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authenticationService.checkIfRoleAdmin()) {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
            return false;
        }
        // if (next.data && next.data.expectedRoles) {
        //     this.router.navigate(['']);
        //     return false;
        // }
        return true;
    }
} */
