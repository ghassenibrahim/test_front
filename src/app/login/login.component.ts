import { User } from './../user';
import { AuthenticationService } from './../shared/services/authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


import { LocalStorageService,LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response:any = { "token":""}

  @LocalStorage()   userconnect:any;
  user: User ;

  constructor(private auth:AuthenticationService, private route:Router, private local:LocalStorageService) { }

  ngOnInit(): void {


  }
verification(request){
    this.auth.login(request).subscribe(res => {
    if (res['token']) {
    localStorage.setItem('token', res["token"]);
    this.route.navigateByUrl("/accueil");
    }
    else {
    this.route.navigateByUrl("");
    }
    });
    }

    logout(){
      this.auth. removeAuthenticationAttributes();
        }
    }
