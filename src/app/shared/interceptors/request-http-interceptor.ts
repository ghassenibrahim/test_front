import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';


@Injectable()
export class RequestHttpInterceptor  implements HttpInterceptor{

  constructor(public router: Router,
              public authenticationService: AuthenticationService,
              private activatedRoute: ActivatedRoute) {
  }
  login(username , password){
    

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const URL_PATH = environment.serverURL;

    console.log(request.url);
    
    if (!request.url.includes('/assets')) {
      if (AuthenticationService.isPublicEndPoint(request.url)) {
        request = request.clone({
          url: URL_PATH + request.url
         
          
        });
      } else if (!request.url.includes('/file-server')) {
        request = request.clone({
          url: URL_PATH + request.url,
          setHeaders: {
            Authorization: `Bearer ${this.authenticationService.getAccessToken()}`
          }
        });
      }
    }
    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log(event)
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error)
          if ( error && error.error && error.error.error === 'Unauthorized' ) {
            this.authenticationService.removeAuthenticationAttributes();
            // not logged in so redirect to login page with the return url and return false
            this.router.navigate(['login'], { queryParams: { returnUrl: this.activatedRoute.snapshot['_routerState'].url }}).then();
          }
          return throwError(error);
        }));
  }
}
