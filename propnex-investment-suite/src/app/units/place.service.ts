import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { fbPostal } from '../auth/firebase.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _fbPostals = new BehaviorSubject<fbPostal[]>([]);
  private _currPlace: fbPostal;

  get fbPostals() {
    return this._fbPostals.asObservable();
  }

  set currPlace(currPlace: fbPostal) {
    this._currPlace = currPlace;
  }

  get currPlace() {
    return this._currPlace;
  }

  constructor(
    private http: HttpClient
  ) { }

  // TODO :: test
  fetchFBPostals() {
    console.log("fetch postal data");
    return this.http
      .get(
        `https://propnexfyp-postals-test.asia-southeast1.firebasedatabase.app/.json`
      )
      .pipe(
        map(resData => {
          const postals: fbPostal[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              postals.push(
                new fbPostal(
                  resData[key].name, 
                  resData[key].postal, 
                  `assets/placeholders/property.jpeg`
                )
              );
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

  addBlock(name: string, postal: string) {
    const newBlock = new fbPostal(
      name,
      postal,
      `assets/placeholders/property.jpeg`
    );
    return this.http
      .post('https://propnexfyp-postals-test.asia-southeast1.firebasedatabase.app/.json',
      { ...newBlock })
      .pipe(
        switchMap(resData => {
          return this.fbPostals;
        }),
        take(1),
        tap(fbUsers => {
          this._fbPostals.next(fbUsers.concat(newBlock));
        })
      );
  }

  // TODO :: test
  editBlock(targetPostal: string, newName: string) {
    console.log(targetPostal, newName);
    let updatedUsers: fbPostal[];
    return this.fbPostals.pipe(
      take(1),
      switchMap(users => {
        if (!users || users.length <= 0) {
          return this.fetchFBPostals();
        } else {
          return of(users);
        }
      }),
      switchMap(users => {
        const updatedUserIndex = users.findIndex(u => u.postal === targetPostal);
        updatedUsers = [...users];
        const oldPlace = updatedUsers[updatedUserIndex];
        updatedUsers[updatedUserIndex] = new fbPostal(
          newName,
          oldPlace.postal,
          oldPlace.imageUrl
        );
        this.currPlace = updatedUsers[updatedUserIndex];
        return this.http.put(
          `https://propnexfyp-postals-test.asia-southeast1.firebasedatabase.app/${updatedUserIndex}.json`,
          { ...updatedUsers[updatedUserIndex] }
        );
      }),
      tap(() => {
        this._fbPostals.next(updatedUsers);
      })
    );
  }
}
