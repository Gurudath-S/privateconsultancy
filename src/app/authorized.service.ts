import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedService {

  isAuthorized: boolean = false;

  constructor() { }

  getIsAuthorized() {
    return this.isAuthorized;
  }

  setIsAuthorized(isAuthorized: boolean) {
    this.isAuthorized = isAuthorized;
  }
}
