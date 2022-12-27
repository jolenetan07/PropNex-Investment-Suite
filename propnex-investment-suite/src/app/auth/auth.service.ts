import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = true;

  private _currUser = new User(
    'u1',
    'jerryliu123',
    'password321',
    'Jerry',
    'Liu',
    10000
  );

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor() {}

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }

  get currentUser() {
    return this._currUser;
  }
}
