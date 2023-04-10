import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, switchMap } from 'rxjs/operators';
import { fbPostal, fbUser } from '../pages/auth/firebase.model';
import { PlaceService } from './place.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;

  private _currFbUser: fbUser;

  private _fbUsers = new BehaviorSubject<fbUser[]>([]);


  get currFbUser() {
    return this._currFbUser;
  }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get fbUsers() {
    return this._fbUsers.asObservable();
  }

  set currFbUser(currFbUser: fbUser) {
    this._currFbUser = currFbUser;
  }


  constructor(
    private http: HttpClient,
    private placeService: PlaceService
  ) {}


  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }

  // fetch user data
  fetchFBUsers() {
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
          this._fbUsers.next(users);
        })
      );
  }

  // add new user
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

  // edit existing user
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

  // add place to users' favourites
  addFav(targetEmail: string, newPlace: fbPostal, newRecs: string[]) {
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

        let newRecArr = oldPlace.personalRec || [];
        newRecArr = newRecArr.concat(newRecs);
        let uniqueRecArr = Array.from(new Set(newRecArr));
        
        updatedUsers[updatedUserIndex] = new fbUser(
          oldPlace.email,
          newFavArr,
          oldPlace.generalRec,
          oldPlace.name,
          oldPlace.password,
          uniqueRecArr,
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

  // remove place from users' favourites
  removeFav(userInd: number, placeInd: number) {
    return this.http
      .delete(
        `https://propnexfyp-user.asia-southeast1.firebasedatabase.app/${userInd}/favourites/${placeInd}.json`
      );
  }
}
