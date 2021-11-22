import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  constructor() { }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}
