import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { fbPostal, fbRec, fbUnit } from '../pages/auth/firebase.model';


@Injectable({
  providedIn: 'root'
})


export class PlaceService {

  private _fbPostals = new BehaviorSubject<fbPostal[]>([]);
  private _fbRecs = new BehaviorSubject<fbRec[]>([]);
  private _currPlace: fbPostal;
  private _currUnit: fbUnit;

  
  get fbPostals() {
    return this._fbPostals.asObservable();
  }

  get fbRecs() {
    return this._fbRecs.asObservable();
  }

  get currPlace() {
    return this._currPlace;
  }

  get currUnit() {
    return this._currUnit;
  }


  set currPlace(currPlace: fbPostal) {
    this._currPlace = currPlace;
  }

  set currUnit(currUnit: fbUnit) {
    this._currUnit = currUnit;
  }


  constructor(
    private http: HttpClient
  ) { }


  // fetch place data
  fetchFBPostals() {
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
                  resData[key].imageUrl,
                  resData[key].units
                )
              );
            }
          }
          return postals;
        }),
        tap(postals => {
          this._fbPostals.next(postals);
        })
      );
  }


  // fetch recommendation data
  fetchFBRecs() {
    return this.http
      .get(
        `https://propnex-recommendations.asia-southeast1.firebasedatabase.app/.json`
      )
      .pipe(
        map(resData => {
          const places: fbRec[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              places.push(
                new fbRec(
                  resData[key].place, 
                  resData[key].rec1, 
                  resData[key].rec2,
                  resData[key].rec3
                )
              );
            }
          }
          return places;
        }),
        tap(places => {
          this._fbRecs.next(places);
        })
      );
  }


  // add new place
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


  // edit existing place
  editBlock(targetPostal: string, newName: string) {
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

  // add new unit in a place
  addUnit(targetPostal: string, unitNumber: string, bedrooms: string, size: string) {
    let updatedPlaces: fbPostal[];
    return this.fbPostals.pipe(
      take(1),
      switchMap(places => {
        if (!places || places.length <= 0) {
          return this.fetchFBPostals();
        } else {
          return of(places);
        }
      }),
      switchMap(places => {
        const updatedPlaceIndex = places.findIndex(p => p.postal === targetPostal);
        updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        const newUnit = new fbUnit(
          bedrooms,
          `assets/placeholders/floorplan.png`,
          size,
          unitNumber
        );
        let newUnitsArr = oldPlace.units || [];
        newUnitsArr = newUnitsArr.concat(newUnit);
        
        updatedPlaces[updatedPlaceIndex] = new fbPostal(
          oldPlace.name,
          oldPlace.postal,
          oldPlace.imageUrl,
          newUnitsArr
        );
        this.currPlace = updatedPlaces[updatedPlaceIndex];
        this.currUnit = newUnit;
        return this.http.put(
          `https://propnexfyp-postals-test.asia-southeast1.firebasedatabase.app/${updatedPlaceIndex}.json`,
          { ...updatedPlaces[updatedPlaceIndex] }
        );
      }),
      tap(() => {
        this._fbPostals.next(updatedPlaces);
      })
    );
  }


  // edit existing unit in a place
  editUnit(targetPostal: string, targetUnitNum: string, newUnit: fbUnit) {
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
        const oldUnitIndex = oldPlace.units.findIndex(u => u.unitNumber === targetUnitNum);
        oldPlace.units[oldUnitIndex] = newUnit;
        let newFavArr = oldPlace.units;
        updatedUsers[updatedUserIndex] = new fbPostal(
          oldPlace.name,
          oldPlace.postal,
          oldPlace.imageUrl,
          newFavArr
        );
        this.currPlace = updatedUsers[updatedUserIndex];
        this.currUnit = newUnit;
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

  // edit all units with same unit number in a place
  editAllUnit(targetPostal: string, targetUnitNum: string, newBedrooms: string, newSize: string) {
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

        let targetString = '-' + targetUnitNum.split('-')[1];
        let unitArr = oldPlace.units.filter(u => u.unitNumber.includes(targetString));

        unitArr.forEach(u => {
          u.bedrooms = newBedrooms;
          u.size = newSize;
        });

        for (let i = 0; i < unitArr.length; i++) {
          let currUnitNum = unitArr[i].unitNumber;
          let currIndex = oldPlace.units.findIndex(u => u.unitNumber === currUnitNum);
          oldPlace.units[currIndex] = unitArr[i];
        }
        
        const oldUnitIndex = oldPlace.units.findIndex(u => u.unitNumber === targetUnitNum);

        updatedUsers[updatedUserIndex] = new fbPostal(
          oldPlace.name,
          oldPlace.postal,
          oldPlace.imageUrl,
          oldPlace.units
        );
        this.currPlace = updatedUsers[updatedUserIndex];
        this.currUnit = oldPlace.units[oldUnitIndex];
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
