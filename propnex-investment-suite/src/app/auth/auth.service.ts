import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { fbTrans, fbPostal, fbUser } from './firebase.model';
import { Unit } from '../units/units.model';

interface fbUserData {
  email: string;
  firstName: string;
  householdIncome: number;
  lastName: string;
  password: string;
  type: string;
  username: string;
}

// interface fbPostalData {
//   name: string;
//   postal: string;
// }

interface fbTransData {
  area: string;
  dateOfSale: string;
  flatModel: string;
  floorMax: string;
  floorMin: string;
  privatePublic: string;
  projectName: string;
  remainingLease: string;
  salePrice: string;
  type: string;
  transID: string;
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
    10000,
    'seller',
    //'buyer',
    [
      new Unit(
        'u1',
        '03-01',
        '142 Bedok Reservoir Rd',
        134,
        '2018-04',
        '',
        5,
        1,
        'Public',
        'Freehold',
        1700000,
        'HDB'
        ),
  
      new Unit(
        'u2',
        '03-02',
        '142 Bedok Reservoir Rd',
        134,
        '2018-04',
        '',
        5,
        1,
        'Public',
        'Freehold',
        1700000,
        'HDB'
        ),
  
        new Unit(
          'u3',
          '03-03',
          '142 Bedok Reservoir Rd',
          134,
          '2018-04',
          '',
          5,
          1,
          'Public',
          'Freehold',
          1700000,
          'HDB'
          ),
      ]
  );

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  private _fbUsers = new BehaviorSubject<fbUser[]>([]);
  private _fbPostals = new BehaviorSubject<fbPostal[]>([]);
  private _fbTrans = new BehaviorSubject<fbTrans[]>([]);

  get fbUsers() {
    return this._fbUsers.asObservable();
  }

  get fbPostals() {
    return this._fbPostals.asObservable();
  }

  get fbTrans() {
    return this._fbTrans.asObservable();
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
                  resData[key].email,
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
          //console.log(users[0]);
          //console.log(users);
          this._fbUsers.next(users);
        })
      );
  }

  fetchFBPostals() {
    return this.http
      .get(
        `https://propnexfyp-postals.asia-southeast1.firebasedatabase.app/.json`
      )
      .pipe(
        map(resData => {
          const postals: fbPostal[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              postals.push(new fbPostal(resData[key][0], resData[key][1]));
            }
          }
          return postals;
        }),
        tap(postals => {
          //console.log(postals[0]);
          //console.log(postals);
          this._fbPostals.next(postals);
        })
      );
  }

  fetchFBTrans() {
    return this.http
      .get(
        'https://real-estate-fyp-transactions.asia-southeast1.firebasedatabase.app/data.json'
      )
      .pipe(
        map(resData => {
          const trans = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              trans.push(
                new fbTrans(
                  resData[key]["Area (Sqm)"],
                  resData[key]["Date of Sale"],
                  resData[key]["Flat_model"],
                  resData[key]["Floor_max"],
                  resData[key]["Floor_min"],
                  resData[key]["Private_Public"],
                  resData[key]["Project Name"],
                  resData[key]["Remaining Lease (2022)"],
                  resData[key]["Sale Price"],
                  resData[key]["Type"],
                  resData[key]["transID"]
                )
              );
            }
          }
          return trans;
        }),
        tap(trans => {
          //console.log(trans[0]);
          //console.log(trans);
          this._fbTrans.next(trans);
        })
      );
  }
}
