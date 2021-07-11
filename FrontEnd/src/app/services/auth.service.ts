import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/api/'

  constructor(private http: HttpClient,
    private router: Router) {
  }

  signUp(user: any) {
    return this.http.post<any>(this.url + 'signup', user);
  }

  signIn(user: any) {
    return this.http.post<any>(this.url + 'signin', user);
  }

  loggedIn() {
    //the !! returns true or false
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
