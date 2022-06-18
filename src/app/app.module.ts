import { RequestHttpInterceptor } from './shared/interceptors/request-http-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxWebstorageModule } from 'ngx-webstorage';
import {FormsModule} from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
   
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule, FormsModule,
    HttpClientModule, NgxWebstorageModule.forRoot(),
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: RequestHttpInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
