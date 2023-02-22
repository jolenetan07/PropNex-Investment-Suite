import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { fbTrans, fbPostal, fbUser } from './firebase.model';
import { Unit } from '../units/units.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;

  private _currFbUser: fbUser;

  set currFbUser(currFbUser: fbUser) {
    this._currFbUser = currFbUser;
  }

  get currFbUser() {
    return this._currFbUser;
  }

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
  //private _fbPostals = new BehaviorSubject<fbPostal[]>([]);
  //private _fbTrans = new BehaviorSubject<fbTrans[]>([]);

  get fbUsers() {
    return this._fbUsers.asObservable();
  }

  // get fbPostals() {
  //   return this._fbPostals.asObservable();
  // }

  // get fbTrans() {
  //   return this._fbTrans.asObservable();
  // }

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

  // editUser(
  //   current: User,
  //   _username: string,
  //   _password: string,
  //   _firstname: string,
  //   _lastname: string,
  //   _income: number
  // ) {
  //   current.username = _username;
  //   current.password = _password;
  //   current.firstname = _firstname;
  //   current.lastname = _lastname;
  //   current.income = _income;
  // }

  fetchFBUsers() {
    console.log("fetch user data");
    return this.http
      .get(
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
                  resData[key].favourites,
                  resData[key].generalRec,
                  resData[key].name,
                  resData[key].password,
                  resData[key].personalRec,
                  resData[key].userType,
                )
              );
            }
          }
          return users;
        }),
        tap(users => {
          //console.log(users[0]);
          console.log(users);
          this._fbUsers.next(users);
        })
      );
  }

  addUser(email: string, name: string, password: string) {
    const newUser = new fbUser(
      email,
      [],
      [],
      name,
      password,
      [],
      'user'
    );
    return this.http
      .post('https://propnexfyp-user.asia-southeast1.firebasedatabase.app/.json',
      { ...newUser })
      .pipe(
        switchMap(resData => {
          return this.fbUsers;
        }),
        take(1),
        tap(fbUsers => {
          this._fbUsers.next(fbUsers.concat(newUser));
        })
      );
  }

  editUser(targetEmail: string, newName: string, newPassword: string) {
    let updatedUsers: fbUser[];
    return this.fbUsers.pipe(
      take(1),
      switchMap(users => {
        if (!users || users.length <= 0) {
          return this.fetchFBUsers();
        } else {
          return of(users);
        }
      }),
      switchMap(users => {
        const updatedUserIndex = users.findIndex(u => u.email === targetEmail);
        updatedUsers = [...users];
        const oldPlace = updatedUsers[updatedUserIndex];
        updatedUsers[updatedUserIndex] = new fbUser(
          oldPlace.email,
          oldPlace.favourites,
          oldPlace.generalRec,
          newName,
          newPassword,
          oldPlace.personalRec,
          oldPlace.userType
        );
        this.currFbUser = updatedUsers[updatedUserIndex];
        return this.http.put(
          `https://propnexfyp-user.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
          { ...updatedUsers[updatedUserIndex] }
        );
      }),
      tap(() => {
        this._fbUsers.next(updatedUsers);
      })
    );
  }

  addFav(targetEmail: string, newPlace: fbPostal) {
    let updatedUsers: fbUser[];
    return this.fbUsers.pipe(
      take(1),
      switchMap(users => {
        if (!users || users.length <= 0) {
          return this.fetchFBUsers();
        } else {
          return of(users);
        }
      }),
      switchMap(users => {
        const updatedUserIndex = users.findIndex(u => u.email === targetEmail);
        updatedUsers = [...users];
        const oldPlace = updatedUsers[updatedUserIndex];
        
        let newFavArr = oldPlace.favourites || [];
        newFavArr = newFavArr.concat(newPlace);
        
        updatedUsers[updatedUserIndex] = new fbUser(
          oldPlace.email,
          newFavArr,
          oldPlace.generalRec,
          oldPlace.name,
          oldPlace.password,
          oldPlace.personalRec,
          oldPlace.userType
        );
        this.currFbUser = updatedUsers[updatedUserIndex];
        return this.http.put(
          `https://propnexfyp-user.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
          { ...updatedUsers[updatedUserIndex] }
        );
      }),
      tap(() => {
        this._fbUsers.next(updatedUsers);
      })
    );
  }

  // removeFav(targetEmail: string, newPlace: fbPostal) {
  //   let updatedUsers: fbUser[];
  //   return this.fbUsers.pipe(
  //     take(1),
  //     switchMap(users => {
  //       if (!users || users.length <= 0) {
  //         return this.fetchFBUsers();
  //       } else {
  //         return of(users);
  //       }
  //     }),
  //     switchMap(users => {
  //       const updatedUserIndex = users.findIndex(u => u.email === targetEmail);
  //       updatedUsers = [...users];
  //       const oldPlace = updatedUsers[updatedUserIndex];
  //       const targetPlaceIndex = oldPlace.favourites.findIndex(p => p.postal === newPlace.postal);
  //       //const newFavs = oldPlace.favourites.splice(targetPlaceIndex, 1);
  //       //const newFavs = oldPlace.favourites.filter(p => p.postal !== newPlace.postal);
  //       console.log('before');
  //       console.log(oldPlace.favourites);
  //       //console.log('hi');
  //       //console.log(newFavs);
  //       updatedUsers[updatedUserIndex] = new fbUser(
  //         oldPlace.email,
  //         oldPlace.favourites.splice(targetPlaceIndex, 1),
  //         oldPlace.generalRec,
  //         oldPlace.name,
  //         oldPlace.password,
  //         oldPlace.personalRec,
  //         oldPlace.userType
  //       );
  //       console.log('after');
  //       console.log(oldPlace.favourites);
  //       this.currFbUser = updatedUsers[updatedUserIndex];
  //       return this.http.put(
  //         `https://propnexfyp-user.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
  //         { ...updatedUsers[updatedUserIndex] }
  //       );
  //     }),
  //     tap(() => {
  //       this._fbUsers.next(updatedUsers);
  //     })
  //   );
  // }

  removeFav(userInd: number, placeInd: number) {
    return this.http
      .delete(
        `https://propnexfyp-user.asia-southeast1.firebasedatabase.app/${userInd}/favourites/${placeInd}.json`
      )
      .pipe(
        switchMap((res) => {
          console.log('hi2');
          console.log(res);
          //console.log(this.fbUsers[userInd]);
          return this.fbUsers[userInd];
        }),
        take(1),
        tap(bookings => {
          console.log('hi3');
          console.log(bookings);
          //this._fbUsers[userInd].favourites.next(bookings);
        })
      );
  }

  // fetchFBPostals() {
  //   //console.log("fetch postal data");
  //   // return this.http
  //   //   .get(
  //   //     `https://propnexfyp-postals.asia-southeast1.firebasedatabase.app/.json`
  //   //   )
  //   //   .pipe(
  //   //     map(resData => {
  //   //       const postals: fbPostal[] = [];
  //   //       for (const key in resData) {
  //   //         if (resData.hasOwnProperty(key)) {
  //   //           postals.push(new fbPostal(resData[key][0], resData[key][1]));
  //   //         }
  //   //       }
  //   //       return postals;
  //   //     }),
  //   //     tap(postals => {
  //   //       //console.log(postals[0]);
  //   //       //console.log(postals);
  //   //       this._fbPostals.next(postals);
  //   //     })
  //   //   );
  // }

  // fetchFBTrans() {
  //   console.log("fetch transaction data");
  //   // return this.http
  //   //   .get(
  //   //     'https://real-estate-fyp-transactions.asia-southeast1.firebasedatabase.app/data.json'
  //   //   )
  //   //   .pipe(
  //   //     map(resData => {
  //   //       const trans = [];
  //   //       for (const key in resData) {
  //   //         if (resData.hasOwnProperty(key)) {
  //   //           trans.push(
  //   //             new fbTrans(
  //   //               resData[key]["Area (Sqm)"],
  //   //               resData[key]["Date of Sale"],
  //   //               resData[key]["Flat_model"],
  //   //               resData[key]["Floor_max"],
  //   //               resData[key]["Floor_min"],
  //   //               resData[key]["Private_Public"],
  //   //               resData[key]["Project Name"],
  //   //               resData[key]["Remaining Lease (2022)"],
  //   //               resData[key]["Sale Price"],
  //   //               resData[key]["Type"],
  //   //               resData[key]["transID"]
  //   //             )
  //   //           );
  //   //         }
  //   //       }
  //   //       return trans;
  //   //     }),
  //   //     tap(trans => {
  //   //       //console.log(trans[0]);
  //   //       //console.log(trans);
  //   //       this._fbTrans.next(trans);
  //   //     })
  //   //   );
  // }
}
