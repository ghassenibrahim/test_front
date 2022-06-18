import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/_services/user.service';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'user_email';
const USER_Role = 'roles';
const Total = null;
const Discount=null;

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private service:UserService,private route:Router) { }

  signOut() {
    window.localStorage.clear();
  }

  public saveToken(token: string,email :string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem(USER_KEY, email);
  }
  public saveUserData(roles: string) {
    window.localStorage.removeItem(USER_Role);
    window.localStorage.setItem(USER_Role, roles);
  }



  public getUserData(){

      return localStorage.getItem('roles');
  }
  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }


  public saveUser(user) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.route.navigate(["login"]);
  }
}
