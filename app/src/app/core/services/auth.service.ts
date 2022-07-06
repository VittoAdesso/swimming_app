import { Injectable } from '@angular/core';

//MODELS
import { Iuser, IuserSignin } from '../models/iuser';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService { 
  //define port and header to petitions
  // public endpoint: string = 'http://localhost:5200/api';
  public endpoint: string = 'https://server-swimmingapp-nodejs.herokuapp.com/api';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  //HOST the response if signin token + _id + expires
  public currentUser: Object = {} ;

  constructor(
    private http: HttpClient, 
    public router: Router) { 
      /**Empty */
    }

  //FUNCTIONS

  // Sign-up
  public signUp(user: Iuser) {
    let api = `${this.endpoint}/signup`;
    return this.http.post(api, user)
    // used pipe to listen & if had error we catchError
      .pipe(
        catchError(this.handleError)
      )
  }
  // SignIn
  public signIn(userSignin: IuserSignin) {
    return this.http.post(`${this.endpoint}/signin`, userSignin)
      .subscribe((res: any) => {
				//Set token
        localStorage.setItem('access_token', res.token)
        this.currentUser = res;
      });
  }  

  // managing TOKEN
  // to logIn
  public getToken() {
    return localStorage.getItem('access_token');
  }

  // are you login? 
  public get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
    // || this way
    // return localStorage.getItem('access_token') !== null ? true : false; 
  }

  // erase token and redirect to signIn (logOut)
  public doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['home']);
    }
  }

  // Error (I can used It always to controll errors)
  private handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
