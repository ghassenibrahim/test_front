import { User } from './../../user';
import { config, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {


    private readonly JWT_TOKEN = 'JWT_TOKEN';
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
    private loggedUser: string;
    private url ='/login';
    constructor(private http: HttpClient) {

    }
  static readonly publicEndPoints: string[] =
    [
      '/api/user/signin'
    ];

  static isPublicEndPoint(endPoint: string) {
    return this.publicEndPoints.some(publicEndPoint => publicEndPoint.includes(endPoint) || endPoint.includes(publicEndPoint));
  }
  login(user:User){
      return this.http.post(this.url,user);
  }




  isConnected(): boolean {
    return !!(JSON.parse(localStorage.getItem('admin-user')));
  }

  getConnectedUser(): any {
    return JSON.parse(localStorage.getItem('admin-user'));
  }

  getAccessToken(): string {
    return localStorage.getItem('token');
  }

  setAuthenticationAttributes(data) {
    localStorage.setItem('admin-token', data.token);
    localStorage.setItem('roles', JSON.stringify(data.roles));
  }

  setConnectedUser(userInfo) {
    localStorage.setItem('admin-user', JSON.stringify(userInfo));
  }

  removeAuthenticationAttributes() {
    localStorage.removeItem('admin-token');
    localStorage.removeItem('admin-user');
    localStorage.removeItem('roles');
  }
}
