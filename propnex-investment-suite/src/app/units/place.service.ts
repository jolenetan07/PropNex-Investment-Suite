import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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

  fetchFBPostals() {
    console.log("fetch postal data");
    return this.http
      .get(
        `https://propnexfyp-postals.asia-southeast1.firebasedatabase.app/.json`
      )
      .pipe(
        map(resData => {
          const postals: fbPostal[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              postals.push(new fbPostal(resData[key][0], resData[key][1], `assets/placeholders/property.jpeg`));
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
}
