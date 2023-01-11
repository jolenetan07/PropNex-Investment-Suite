import { Injectable } from '@angular/core';
import { User, fbUser } from './user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';

interface fbUserData {
  email: string;
  firstName: string;
  householdIncome: number;
  lastName: string;
  password: string;
  type: string;
  username: string;
}

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

  private _fbUsers = new BehaviorSubject<fbUser[]>([]);

  get fbUsers() {
    return this._fbUsers.asObservable();
  }

  constructor(
    private http: HttpClient
  ) {}

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }

  get currentUser() {
    return this._currUser;
  }

  editUser(
    current: User,
    _username: string,
    _password: string,
    _firstname: string,
    _lastname: string,
    _income: number
  ) {
    current.username = _username;
    current.password = _password;
    current.firstname = _firstname;
    current.lastname = _lastname;
    current.income = _income;
  }

  fetchFBUsers() {
    return this.http
      .get<{ [key: string]: fbUserData }>(
        'https://propnexfyp-user.asia-southeast1.firebasedatabase.app/.json'
      )
      .pipe(
        map(resData => {
          const users = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              users.push(
                new fbUser(
                  key,
                  // resData[key].email,
                  resData[key].firstName,
                  resData[key].householdIncome,
                  resData[key].lastName,
                  resData[key].password,
                  resData[key].type,
                  resData[key].username,
                )
              );
            }
          }
          return users;
        }),
        tap(users => {
          this._fbUsers.next(users);
        })
      );
  }
}
